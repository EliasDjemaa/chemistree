import React from 'react';
import Navigation from '../Navigation.js';
import { useState } from 'react';
import './login.css';
import '../../App.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Basic client-side validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    try {
      // Make an API call to your Flask backend for authentication
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Authentication successful
        // You might want to store the user token in local storage or state
        console.log('Login successful!', data);
      } else {
        // Authentication failed
        setError(data.error || 'An error occurred during login');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div>
      <Navigation />
      <div className='content-container'>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
    </div>
  );
};
