import React, { useState } from 'react';
import Navigation from '../Navigation.js';

// Define the RequestAccess functional component
export const RequestAccess = () => {
  // State variables for email, password, user type, and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // Default to 'patient'
  const [error, setError] = useState('');

  // Function to handle sign-up logic
  const handleSignUp = async () => {
    try {
      // Client-side validation
      if (!validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }

      if (!validatePassword(password)) {
        setError('Password must include one capital letter and one number');
        return;
      }

      // Make an API call to create a new user
      const response = await fetch('http://127.0.0.1:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send user data in the request body as JSON
        body: JSON.stringify({
          email,
          password,
          // Convert userType to boolean values
          is_patient: userType === 'patient',
          is_caregiver: userType === 'caregiver',
        }),
      });

      // Parse the response data as JSON
      const data = await response.json();

      // Check if the API call was successful
      if (response.ok) {
        console.log('User created successfully!', data);
      } else {
        // Set error state if there was an issue creating the user
        setError(data.error || 'Error creating user');
      }
    } catch (error) {
      // Log and set error state for network or other errors
      console.error('Error during signup:', error);
      setError('An error occurred during signup');
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Use a simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate password format (one capital letter and one number)
  const validatePassword = (password) => {
    // Use a regex to check for at least one capital letter and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return passwordRegex.test(password);
  };

  // JSX representing the component's UI
  return (
    <div>
      {/* Render the Navigation component */}
      <Navigation></Navigation>
      <h2>Sign Up</h2>
      {/* Input field for email */}
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      {/* Input field for password */}
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      {/* Dropdown for selecting user type */}
      <label>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="caregiver">Caregiver</option>
        </select>
      </label>
      <br />
      {/* Button to trigger the handleSignUp function */}
      <button type="button" onClick={handleSignUp}>
        Sign Up
      </button>
      {/* Display an error message if there is an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
