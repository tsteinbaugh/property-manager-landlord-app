import { useNavigate } from 'react-router-dom';

export default function Header({ setRole }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setRole(null);
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div></div>
      <button
        onClick={handleSignOut}
        className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
