import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { PropertyProvider } from './context/PropertyContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </UserProvider>
  </React.StrictMode>
);
