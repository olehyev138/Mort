import React from 'react';
import { SettingProvider } from './context/SettingProvider';
import { CollapsedProvider } from './context/CollapsedProvider';
import { Auth0Provider } from '@auth0/auth0-react';
import Router from './routes'
import { ThemeProvider } from './theme';

function App() {

  return (
    <Auth0Provider
      domain={window.location.hostname.includes('localhost') ? `${process.env.REACT_DEV_AUTH0_DOMAIN}` : `${process.env.REACT_PROD_AUTH0_DOMAIN}`}
      clientId={window.location.hostname.includes('localhost') ? `${process.env.REACT_DEV_AUTH0_DOMAIN}` : `${process.env.REACT_PROD_AUTH0_DOMAIN}`}
      authorizationParams={{
        redirect_uri: `${window.location.hostname.includes('localhost') ? process.env.REACT_DEV_BASE_URL : process.env.REACT_PROD_BASE_URL}/home` 
      }}
    >
      <CollapsedProvider>
        <SettingProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </SettingProvider>
      </CollapsedProvider>
    </Auth0Provider>

  );
}

export default App;
