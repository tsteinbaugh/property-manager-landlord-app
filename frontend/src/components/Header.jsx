import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ setRole }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setRole(null);
    navigate('/');
  };

  return (
    <div className={styles.headerContainer}>
      <button onClick={handleSignOut} className={styles.signOutButton}>
        Sign Out
      </button>
    </div>
  );
}
