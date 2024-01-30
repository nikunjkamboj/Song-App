import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider

    domain="songsnk.us.auth0.com"
    clientId="fTXpwj0pGiH6uTukXbw9jZSczXXQQV31"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>,

);

