import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/app.css';
import './assets/css/font.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
);
