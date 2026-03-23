import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
// import App from './App.jsx'
import Router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)