# Estágio 1: Construir a aplicação React
FROM node:20-alpine AS build
RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod=false

COPY . .

# Argumento de build para a URL da API
# Vamos usar /api como proxy
ARG VITE_API_URL=/api
ARG VITE_S3_BASE_URL
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_S3_BASE_URL=${VITE_S3_BASE_URL}

RUN pnpm run build

# Estágio 2: Servir com Nginx
FROM nginx:1.27-alpine

# Copiar os arquivos estáticos construídos
COPY --from=build /app/dist /usr/share/nginx/html

# Remover configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar nossa configuração personalizada (próximo arquivo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]