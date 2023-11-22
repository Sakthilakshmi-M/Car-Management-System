import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {inject} from '@vercel/analytics';
import { AuthContextProvider } from './context/AuthContext';

inject();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>
);


