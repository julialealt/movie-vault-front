import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { queryClient } from './lib/query-client'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)
