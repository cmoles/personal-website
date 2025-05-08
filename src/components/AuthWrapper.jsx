import { useEffect, useState } from 'preact/hooks';
import { initAuth0, isAuthenticated } from '../lib/auth';
import ControlPanel from './ControlPanel';

export default function AuthWrapper() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await initAuth0();
        const authenticated = await isAuthenticated();
        
        if (!authenticated) {
          window.location.replace('/');
        } else {
          setIsReady(true);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        window.location.replace('/');
      }
    };
    
    checkAuth();
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return <ControlPanel />;
} 