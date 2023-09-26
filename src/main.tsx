import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <App />

  /* 
  
  URL: https://pt-br.legacy.reactjs.org/docs/strict-mode.html

  Fluxo com erro, renderização duplicada
  <React.StrictMode>
  </React.StrictMode> 
  
  */
)
