import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='340050983213-gtp9vgb4nai054uknt7ne9e1s8822gf2.apps.googleusercontent.com'>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </GoogleOAuthProvider>
);


