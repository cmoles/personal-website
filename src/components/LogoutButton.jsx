// src/components/LogoutButton.jsx

// TODO: Find out why I can't add this to the ControlPanel component
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
