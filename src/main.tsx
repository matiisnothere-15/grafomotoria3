import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// PWA: importar registro del service worker
import { registerSW } from 'virtual:pwa-register';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// PWA: registrar el service worker
registerSW({
  onNeedRefresh() {
    console.log('⚠️ Nueva versión disponible. Refrescar para actualizar.');
  },
  onOfflineReady() {
    console.log('✅ App lista para usarse sin conexión.');
  },
});
