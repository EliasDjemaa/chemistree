import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation.js';
import './login.css';
import '../../App.css';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userFirstName', data.firstName);
        
        console.log('Login successful!', data);

        // Redirect based on user role
        if (data.role === 'patient') {
          navigate('/WebAppHome');
          console.log('User Role:', data.role);
        } else if (data.role === 'caregiver') {
          navigate('/CareAppHome');
          console.log('User Role:', data.role);
        }
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div>
      <Navigation />
      <div className='content-container'>
        <div id='left-login-form'>
          <h1>Welcome back</h1>
          <p>The home of immediate, and reliable care.</p>
          <p>Dont have an account? <NavLink to="/RequestAccess"> Request access</NavLink></p>
          <form className='login-form'>
            <label>
              Email:
              <br />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='email-input'/>
            </label>
            <br />
            <label>
              Password:
              <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='password-input'/>
            </label>
            <br />
            <button type="button" onClick={handleLogin} className='login-btn'>
              Login
              <br />
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>

      </div>
    </div>
  );
};
