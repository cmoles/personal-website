// src/components/LogoutButton.jsx
export default function LogoutButton() {
  return (
    <button 
      onClick={() => window.location.href = '/logout'}
      className="logout-button"
    >
      Log Out
    </button>
  );
}
