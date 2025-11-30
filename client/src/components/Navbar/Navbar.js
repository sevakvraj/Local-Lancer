import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>Local Lancer</Link> {/* Changed name to Local Lancer */}
        <div className={styles.navLinks}>
          <Link to="/">Browse Gigs</Link>
          <Link to="/about">About Us</Link> {/* <-- ADD THIS LINE */}
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <span className={styles.userInfo}>Hi, {user.username}!</span>
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Button onClick={() => navigate('/register')}>Register</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;