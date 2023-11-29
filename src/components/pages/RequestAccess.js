import React, { useState } from 'react';
import Navigation from '../Navigation.js';
import { useNavigate  } from 'react-router-dom';
import './RequestAccess.css';

// Define the RequestAccess functional component
export const RequestAccess = () => {
  // State variables for email, password, user type, and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // Default to 'patient'
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState(''); // Add first name state
  const [lastName, setLastName] = useState('');   // Add last name state

  const navigate = useNavigate();


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

      // Check if first name and last name are provided
      if (!firstName || !lastName) {
        setError('First name and last name are required');
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
          firstName, 
          lastName,   
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

        // Show a pop-up notification upon successful account creation
        window.alert('Your account has been successfully created!');

          navigate('/login');
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

// ... (your existing code)

// JSX representing the component's UI
return (
  <div>
    {/* Render the Navigation component */}
    <Navigation></Navigation>
    <div className='reqAccess-container'>
      <h2>Request Access</h2>
      <p>Welcome to chemistree - let's create your account.</p>

      {/* Input field for first name and last name */}
      <div className='flex-container'>
        <div className='first-name'>
          <label>
            First Name:
            <br />
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>
        <div className='last-name'>
          <label>
            Last Name:
            <br />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>
      </div>

      {/* Input field for email */}
      <div className='flex-container'>
        <label>
          Email:
          <br />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='email-input'/>
        </label>
      </div>

      {/* Input field for password */}
      <div className='flex-container'>
        <label>
          Password:
          <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='password-input'/>
        </label>
      </div>

      {/* Dropdown for selecting user type */}
      <div className='flex-container'>
        <label>
          User Type:
          <br />
          <select value={userType} onChange={(e) => setUserType(e.target.value)} className='usert-input'>
            <option value="patient">Patient</option>
            <option value="caregiver">Caregiver</option>
          </select>
        </label>
      </div>

      {/* Button to trigger the handleSignUp function */}
      <div className='flex-container'>
        <button type="button" onClick={handleSignUp} className='btn-input'>
          Request Access
        </button>
      </div>

      {/* Display an error message if there is an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  </div>
);
};
