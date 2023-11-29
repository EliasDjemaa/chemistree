import React from 'react';
import Navigation from '../Navigation.js';
import carerImage from '../../imgs/carer.jpeg';
import patientsImage from '../../imgs/patients.jpeg';

import './home.css';

export const Home = () => {
  return (
    <div>
      {/* Navigation component */}
      <div className='routeOutlet'>
        <Navigation />
      </div>

      {/* Main content container */}
      <div className='bkg'>
        <div className='main-container'>
          {/* Hero section */}
          <div id='hero'>
            <div id='hero-left'>
              {/* Main header */}
              <h1 id='hero-header'>
                Where caregivers and patients come together.
              </h1>
            </div>
            <div id='hero-right'>
              {/* Subheader */}
              <p id='sub-head'>
              Together, we can improve access to healthcare and deepen its impact for millions of in or out patients.
              </p>
            </div>
          </div>

          {/* Sub-content section */}
          <div className='sub-content'>
            {/* Left sub-content */}
            <div className='sub-content-box'>
              <h3 className='sub-header'>
                I’m a caregiver
              </h3>
              {/* Description for caregivers */}
              <p className='sub-des'>
                Keep track of patient health metrics and share with the rest of the
                care team.
              </p>
              <img src={carerImage} alt="Carer" />
            </div>

            {/* Right sub-content */}
            <div className='sub-content-box'>
              <h3 className='sub-header'>
                I’m a patient
              </h3>
              {/* Description for caregivers (duplicate section; needs updating) */}
              <p className='sub-des'>
                Update your careteam on how your feeling with symptom journaling and recieve medication reminders.
              </p>
              <img src={patientsImage} alt="Patient" />
            </div>
          </div>

        <div className='dividerL'></div>

        <div className='content-div'>
          {/* Header column */}
          <div className='header-column'>
            <h1 className='content-header'>A platform designed for simpler, smarter and more rewarding care</h1>
          </div>

          {/* Content column */}
          <div className='content-column'>
            <h4 id='text-l-marg'>We help make sure you dont forget</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>


        </div>
      </div>
    </div>
  );
};
