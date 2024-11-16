import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { App2 } from './NewApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
