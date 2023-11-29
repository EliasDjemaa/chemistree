// PatientNav.jsx

import React from "react";
import { Link } from "react-router-dom";
import './appNavStyles.css';

const PatientNav = () => {
    return (
        <nav className="left-sidebar">
        <div className="logo-container">
            <span className="logo-inter-app">
            <Link to="/WebAppHome">chemistree</Link>
            </span>
        </div>

        <ul>
            <li>
            <Link to="/WebAppHome">
                <div className="nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 
                    7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 
                    12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 
                    7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 
                    5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 
                    8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" 
                    fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <p className="nav-text">Today</p>
                </div>
            </Link>
            </li>
            <li>
            <Link to="/Inbox">
                <div className="nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 
                    11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 
                    14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 
                    13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 
                    14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" 
                    fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <p className="nav-text">Inbox</p>
                </div>
            </Link>
            </li>
            <li>
            <Link to="/Reminders">
                <div className="nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 
                    2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 
                    1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 
                    3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 
                    13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM11 8.5V12H9V8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5V12H6V8.5C6 
                    8.22386 5.77614 8 5.5 8C5.22386 8 5 8.22386 5 8.5V12H3V6H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <p className="nav-text">Reminders</p>
                </div>
            </Link>
            </li>
            <li>
            <Link to="/Insights">
                <div className="nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1C7.22485 1 7 1.22485 7 1.5V13.5C7 13.7751 7.22485 14 7.5 14C7.77515 14 8 13.7751 8 13.5V1.5C8 1.22485 
                    7.77515 1 7.5 1Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    <path d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5C3.27614 4.5 3.5 4.72386 3.5 5V13.5C3.5 13.7761 3.27614 14 3 14C2.72386 
                    14 2.5 13.7761 2.5 13.5V5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    <path d="M12.5 11C12.7761 11 13 11.2249 13 11.5C13 11.7751 12.7761 12 12.5 12C12.2239 12 12 11.7751 12 11.5C12 11.2249 
                    12.2239 11 12.5 11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <p className="nav-text">Insights</p>
                </div>
            </Link>
            </li>
            <li>
            <Link to="/">
                <div className="nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 
                    7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 
                    12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 
                    7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 
                    5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 
                    8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" 
                    fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <p className="nav-text">Log Out</p>
                </div>
            </Link>
            </li>
        </ul>
        </nav>
    );
};

export default PatientNav;
