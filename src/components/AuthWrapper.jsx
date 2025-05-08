import { useEffect, useState } from 'preact/hooks';
import { initAuth0, isAuthenticated } from '../lib/auth';
import ControlPanel from './ControlPanel';

export default function AuthWrapper() {
  const [isReady, setIsReady] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await initAuth0();
        const authenticated = await isAuthenticated();
        
        if (!authenticated) {
          setIsReady(true);
          setIsAuth(false);
        } else {
          setIsReady(true);
          setIsAuth(true);
        }
      } catch (error) {
        console.error('Auth check error:', error);
      }
    };
    
    checkAuth();
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <div>
      <button 
        onClick={() => window.location.href = '/login'}
        className="login-button"
      >
        Log In
    </button>
  </div>;
  }

  return <div><ControlPanel /></div>;
} 