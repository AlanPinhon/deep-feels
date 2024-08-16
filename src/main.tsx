import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DeepFeelsApp } from './DeepFeelsApp.tsx';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DeepFeelsApp />
    </BrowserRouter>
  </React.StrictMode>,
)
