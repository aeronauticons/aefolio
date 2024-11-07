import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  () => {
    document.dispatchEvent(new Event('app-loaded'));
  }
)
