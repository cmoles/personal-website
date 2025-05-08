// Create in src/lib/auth.js
import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client;

export const initAuth0 = async () => {
  try {
    console.log('Initializing Auth0...');
    auth0Client = await createAuth0Client({
      domain: 'dev-jrhe3mxh6l6rdksu.us.auth0.com',
      clientId: 'StDzS6bFNHjWVUSyQiOIUqDZDmBfUQFe',
      authorizationParams: {
        audience: 'https://9lo9v20q31.execute-api.us-west-2.amazonaws.com/',
        redirect_uri: window.location.origin + '/callback',
        scope: 'openid profile email'
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    });
    console.log('Auth0 initialized successfully');
    return auth0Client;
  } catch (error) {
    console.error('Error initializing Auth0:', error);
    throw error;
  }
};

export const login = async () => {
  try {
    console.log('Starting login process...');
    if (!auth0Client) {
      console.log('Auth0 client not initialized, initializing now...');
      await initAuth0();
    }
    console.log('Redirecting to Auth0 login...');
    await auth0Client.loginWithRedirect();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const handleCallback = async () => {
  console.log('handleCallback called');
  try {
    await auth0Client.handleRedirectCallback();
    console.log('Redirect callback handled successfully');
    window.location.replace('/web/gpu-server');
  } catch (error) {
    console.error('Error in handleCallback:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    console.log('Starting logout process...');
    
    if (!auth0Client) {
      console.log('Auth0 client not initialized, initializing now...');
      await initAuth0();
    }
    
    // Use Auth0's logout method
    await auth0Client.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
    
    // Clear all Auth0 related items from localStorage
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('auth0')) {
        localStorage.removeItem(key);
      }
    });
    
    // Clear session storage
    sessionStorage.clear();
    
    // Clear any cookies that might be set
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });
    
    console.log('Logout complete, redirecting to home...');
    window.location.href = '/';
  } catch (error) {
    console.error('Error during logout:', error);
    window.location.href = '/';
  }
};

export const getToken = async () => {
  return await auth0Client.getTokenSilently();
};

export const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};
