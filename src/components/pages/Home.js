import React from 'react'
import Navigation from '../Navigation.js';
import './home.css'

export const Home = () => {
  return (
    <div>
      <div className='routeOutlet'>
        <Navigation />
      </div>

      <div className='main-container'> {/* serves as the body*/}
        <div id='hero'>
          <div id='hero-left'>
            <h1 id='hero-header'>
              Where care givers and patients come together. 
            </h1>
          </div>
          <div id='hero-right'>
            <p id='sub-head'>
              Whether you're a care-giver or patient, receive medication reminders, 
              summary of medical symptoms and current patient condition.
            </p>
          </div>
        </div>

        <div className='sub-content'>
          
          <div id='sub-left'>
            <h3 className='sub-header'>
              I’m a caregiver
            </h3>
            <p>
              Keep track of patient health metrics and share with the rest of the 
              care team.
            </p>
          </div>

          <div id='sub-right'>
          <h3 className='sub-header'>
              I’m a caregiver
            </h3>
            <p>
              Keep track of patient health metrics and share with the rest of the 
              care team.
            </p>
          </div>
                  <hr  style={{
              color: '#FFFFFF',
              width: '20px',
          }}/>
          <hr className='dividerL'/>

          <h3 className='sub-header'>
            Simple, smarter, more 
            rewarding care.
          </h3>

        </div>
      </div>
        {/* Add more content as needed */}
      </div>

  )
}
