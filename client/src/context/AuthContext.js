import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initial state is 'null', which means "we are currently checking for a user"
  const [user, setUser] = useState(null);

  const updateUserFromToken = (token) => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Check if the token is expired
        if (decoded.exp * 1000 > Date.now()) {
          // If token is valid, set the user object with all details
          setUser({ 
            id: decoded.user.id, 
            role: decoded.user.role, 
            username: decoded.user.username 
          });
        } else {
          // If token is expired, set user to 'false'
          localStorage.removeItem('token');
          setUser(false);
        }
      } catch (error) {
        // If token is invalid, set user to 'false'
        console.error("Invalid token:", error);
        localStorage.removeItem('token');
        setUser(false);
      }
    } else {
      // If there is no token, set user to 'false'.
      // This tells the app: "Loading is complete, and no one is logged in."
      setUser(false);
    }
  };

  // Run this check once when the app loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    updateUserFromToken(token);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    updateUserFromToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(false); // On logout, explicitly set user to 'false'
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

