FROM node:20-alpine AS build
RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod=false

COPY . .

ARG VITE_API_URL=/api
ARG VITE_S3_BASE_URL
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_S3_BASE_URL=${VITE_S3_BASE_URL}

RUN pnpm run build

FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]