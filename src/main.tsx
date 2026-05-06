import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Root element not found");
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } catch (error) {
    console.error("React Init Error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: white; background: #0a0a0a; font-family: sans-serif;">
      <h1>Erro de Carregamento</h1>
      <p>Ocorreu um erro ao iniciar o aplicativo. Por favor, verifique o console do navegador.</p>
    </div>`;
  }
}
