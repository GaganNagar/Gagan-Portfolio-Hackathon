import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Dhyan rakhein ki CSS ka path wahi ho jo aapne folder structure mein banaya hai
import './styles/global.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);