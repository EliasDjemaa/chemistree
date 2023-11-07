import React from 'react'
import Navigation from '../Navigation.js';
import './login.css'
import '../../App.css'

export const Login = () => {
  return (
    <div>
      <Navigation />
      <div className='content-container'>
        <div className='left-content'>
          <h1>UNDERSTAND AND OPTIMIZE YOUR HEALTH!</h1>
          <div>
            <ul id='left-content-list'>
              <li>Discover whats affecting your health</li>
              <li>Track your health, symptoms, illnesses, and medicines all in one place</li>
              <li>Track your digestive issues, such as stomach pain and nausea.</li>
            </ul>
          </div>
          
          </div>
        
        <div className='right-login-form'>
          <h1>test content</h1>
        </div>

        
      </div>
      
    </div>
  )
}
