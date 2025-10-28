import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GenderProvider } from './contexts/GenderContext'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GenderProvider>
      <App />
    </GenderProvider>
  </StrictMode>,
);
