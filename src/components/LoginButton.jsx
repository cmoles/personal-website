// src/components/LoginButton.jsx
import { login } from '../lib/auth';

export default function LoginButton() {
  return (
    <button onClick={login}>
      Log In
    </button>
  );
}
