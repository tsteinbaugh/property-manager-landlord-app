import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css';

export default function SignIn({ setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // You can add real auth logic here later
    setRole('landlord'); // temporary default
    navigate('/dashboard');
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Welcome</h2>
        <p className={styles.subtext}>Sign in to manage your properties</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <button onClick={handleSignIn} className={styles.button}>
          Sign In
        </button>
      </div>
    </div>
  );
}
