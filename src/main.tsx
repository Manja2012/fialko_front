import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/base.scss';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/userContext.js';
//stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY_STRIPE);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
