// Patient homepage
import React from 'react';
import PatientNav from '../../PatientNav';
import './WebAppStyles.css'

export const WebAppHome = () => {
    const userFirstName = localStorage.getItem('userFirstName');

    return (
    <div className='web-app-container'>
        {/* Navigation component */}
        <div className='routeOutlet'>
            <PatientNav />
        </div>
        <h1 style={{ fontSize: '40px' }}>Good morning, {userFirstName}!</h1>
        <p>testing</p>
    </div>
    );
};
