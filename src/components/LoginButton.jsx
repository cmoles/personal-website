// src/components/LoginButton.jsx

// TODO: Find out why I can't add this to the AuthWrapper component
export default function LoginButton() {
  return (
    <button 
      onClick={() => window.location.href = '/login'}
      className="login-button"
    >
      Log In
    </button>
  );
}
