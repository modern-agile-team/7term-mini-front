import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/styles/firstpage.css';
import './pages/styles/font.css';
import './pages/styles/registerpage.css';
import './pages/styles/emptypage.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
