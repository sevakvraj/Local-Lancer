import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/axiosConfig';
import Button from '../../components/Button/Button';
import loginStyles from '../LoginPage/LoginPage.module.css';
import registerStyles from './RegisterPage.module.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'freelancer' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/auth/register', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className={loginStyles.formContainer}>
      <h2>Create an Account</h2>
      {error && <p className={loginStyles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={loginStyles.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} required />
        </div>
        <div className={loginStyles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} required />
        </div>
        <div className={loginStyles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} required />
        </div>
        <div className={registerStyles.radioGroup}>
          <legend>I am a:</legend>
          <div className={registerStyles.radioOptions}>
            <label><input type="radio" name="role" value="freelancer" checked={formData.role === 'freelancer'} onChange={handleChange} /> Freelancer</label>
            <label><input type="radio" name="role" value="client" checked={formData.role === 'client'} onChange={handleChange} /> Client</label>
          </div>
        </div>
        <Button type="submit" className={loginStyles.fullWidthBtn}>Register</Button>
      </form>
       <p className={loginStyles.redirectText}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;