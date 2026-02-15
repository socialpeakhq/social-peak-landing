import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
)
