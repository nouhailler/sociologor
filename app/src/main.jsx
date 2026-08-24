import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { StoreProvider } from './state/store.jsx';
import { setupPWA } from './pwa.js';
import { LegalGate } from './legal/FirstLaunchNotice.jsx';
import './styles/nocturne.css';
import './styles/app.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <LegalGate>
          <App />
        </LegalGate>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);

setupPWA();
