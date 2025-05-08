// src/components/ControlPanel.jsx
import { useState, useEffect } from 'preact/hooks';
import { startInstance, stopInstance, getInstanceStatus } from '../lib/api';

export default function ControlPanel() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchStatus = async () => {
    try {
      const data = await getInstanceStatus();
      setStatus(data);
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  };
  
  useEffect(() => {
    fetchStatus();
    // Set up polling
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);
  
  const handleStart = async () => {
    setLoading(true);
    try {
      await startInstance();
      await fetchStatus();
    } catch (error) {
      console.error('Error starting instance:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleStop = async () => {
    setLoading(true);
    try {
      await stopInstance();
      await fetchStatus();
    } catch (error) {
      console.error('Error stopping instance:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {status ? (
        <div>
          <p>Status: {status.state}</p>
          {status.automatic1111Url && (
            <p>
              <a href={status.automatic1111Url} target="_blank" rel="noopener noreferrer">
                Open Automatic1111
              </a>
            </p>
          )}
        </div>
      ) : (
        <p>Loading status...</p>
      )}
      
      <div>
        <button 
          onClick={handleStart} 
          disabled={loading || (status?.state === 'running')}
        >
          Start Instance
        </button>
        
        <button 
          onClick={handleStop} 
          disabled={loading || (status?.state === 'stopped')}
        >
          Stop Instance
        </button>
      </div>
    </div>
  );
}
