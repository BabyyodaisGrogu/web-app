import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTest1 from './app-test1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTest1 />
  </StrictMode>,
)
