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
          <h4>Welcome to immediate, and reliable care.</h4>

          <h1>Welcome back</h1>
          <p>Dont have an account? <NavLink to="/RequestAccess"> Request access</NavLink></p>
          <form>
            <label>
              Email:
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>

        <div id='right-content'></div>
      </div>
    </div>
  );
};
