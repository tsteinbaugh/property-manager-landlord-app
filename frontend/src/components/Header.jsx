import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import buttonStyles from '../styles/Buttons.module.css';

export default function Header({ setRole }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setRole(null);
    navigate('/');
  };

  return (
    <div className={styles.headerContainer}>
      <button onClick={handleSignOut} className={buttonStyles.primaryButton}>
        Sign Out
      </button>
    </div>
  );
}
