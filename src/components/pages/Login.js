// Import necessary modules and components from React and other files
import React from 'react';
import Navigation from '../Navigation.js';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './login.css';
import '../../App.css';

// Define a functional component named Login
export const Login = () => {
  // Define state variables for email, password, and error using the useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Define a function named handleLogin, which is an asynchronous function
  const handleLogin = async () => {
    // Basic client-side validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Make an API call to a Flask backend for authentication
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse the response data as JSON
      const data = await response.json();

      // Check if the API call was successful
      if (response.ok) {
        // Authentication successful
        // Store the user token in local storage or state
        console.log('Login successful!', data);
      } else {
        // Authentication failed
        setError(data.error || 'Authentication failed');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  // Return JSX representing the component's UI
  return (
    <div>
      {/* Render the Navigation component */}
      <Navigation />
      <div className='content-container'>
        <div id='left-login-form'>
          <h4>Welcome to immediate, and reliable care.</h4>

          <h1>Welcome back</h1>
          <p>Dont have an account? <NavLink to="/RequestAccess"> Request access</NavLink></p>
          {/* Render a form */}
          <form>
            {/* Input field for the email with a controlled component pattern */}
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
            {/* Button to trigger the handleLogin function */}
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            {/* Display an error message if there is an error */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>

        <div id='right-content'>

        </div>
        
      </div>
    </div>
  );
};
