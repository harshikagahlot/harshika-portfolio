import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // This points to App in the same folder
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)