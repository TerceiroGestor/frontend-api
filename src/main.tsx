import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <App />

  /* 
  
  URL: https://pt-br.legacy.reactjs.org/docs/strict-mode.html

  Fluxo com erro, renderização duplicada
  <React.StrictMode>
  </React.StrictMode> 
  
  */
)
