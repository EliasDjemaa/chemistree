import React from 'react';
import Navigation from '../Navigation.js';

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
                Whether you're a caregiver or patient, receive medication reminders,
                a summary of medical symptoms, and the current patient condition.
              </p>
            </div>
          </div>

          {/* Sub-content section */}
          <div className='sub-content'>
            {/* Left sub-content */}
            <div id='sub-left'>
              <h3 className='sub-header'>
                I’m a caregiver
              </h3>
              {/* Description for caregivers */}
              <p>
                Keep track of patient health metrics and share with the rest of the
                care team.
              </p>
            </div>

            {/* Right sub-content */}
            <div id='sub-right'>
              <h3 className='sub-header'>
                I’m a patient
              </h3>
              {/* Description for caregivers (duplicate section; needs updating) */}
              <p>
                Keep records of your symptoms and view symptoms 
              </p>
            </div>
          </div>

          {/* Additional content */}
          <p>
            Lorem ipsum, Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only
            five centuries but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularized in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing software like Aldus PageMaker, including versions
            of Lorem Ipsum.
          </p>

        </div>
      </div>
    </div>
  );
};
