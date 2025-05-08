// src/lib/api.js
import { getToken } from './auth';

const API_URL = 'https://9lo9v20q31.execute-api.us-west-2.amazonaws.com';

export const startInstance = async () => {
  const token = await getToken();
  
  return fetch(`${API_URL}/instances/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(res => res.json());
};

export const stopInstance = async () => {
  const token = await getToken();
  
  return fetch(`${API_URL}/instances/stop`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(res => res.json());
};

export const getInstanceStatus = async () => {
  const token = await getToken();
  
  return fetch(`${API_URL}/instances/status`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    mode: 'cors'
  }).then(res => res.json());
};
