import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignIn({ setRole }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed === 'landlord') {
      setRole('landlord');
      navigate('/dashboard');
    } else if (trimmed === 'manager') {
      setRole('property_manager');
      navigate('/dashboard');
    } else {
      alert('Enter landlord or manager');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-2">Sign In</h1>
        <input
          type="text"
          placeholder="Enter role (landlord or manager)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </div>
  );
}
