import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartDataProvider } from './context/cart.context';
ReactDOM.render(
  <CartDataProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartDataProvider>,
  document.getElementById('root')
);