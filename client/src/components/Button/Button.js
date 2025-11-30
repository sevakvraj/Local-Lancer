import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;