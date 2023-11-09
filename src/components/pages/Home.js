import React from 'react'
import Navigation from '../Navigation.js';
import './home.css'

export const Home = () => {
  return (
    <div>
      <div className='routeOutlet'>
        <Navigation />
      </div>

      
    <div className='bkg'>
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
          </div>
          <p>lorem epsum, Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy
             text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book. It has survived not only 
             five centuries, but also the leap into electronic typesetting, remaining 
             essentially unchanged. It was popularised in the 1960s with the release 
             of Letraset sheets containing Lorem Ipsum passages, and more recently 
             with desktop publishing software like Aldus PageMaker including versions 
             of Lorem Ipsum.
            </p>

      </div>
      </div>
      </div>

  )
}
