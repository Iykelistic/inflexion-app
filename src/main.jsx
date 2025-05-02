import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/navbar.css';
import './assets/css/signupform.css';
import './assets/css/footer.css';
import './assets/css/signin.css';
import './assets/css/sidebar.css';
import './assets/css/main.css';
import './assets/css/dashboard.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
