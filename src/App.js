import React, { useEffect, useState , Suspense } from 'react';
import { Routes, Route, Navigate , useNavigate } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Solutions } from "./components/pages/Solutions";
import { RequestAccess } from "./components/pages/RequestAccess";
import { Login } from "./components/pages/Login";
import { WebAppHome } from "./components/pages/PatientApp/WebAppHome"; 
import { CareAppHome } from "./components/pages/CareApp/CareAppHome"; 
import withRoleCheck from './withRoleCheck';


const ProtectedWebAppHome = withRoleCheck(WebAppHome, ['patient']);
const ProtectedCareAppHome = withRoleCheck(CareAppHome, ['caregiver']);


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/RequestAccess" element={<RequestAccess />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/WebAppHome" element={<ProtectedWebAppHome />} />
        <Route path="/CareAppHome" element={<ProtectedCareAppHome />} />
        {/* Add other routes as needed */}
      </Routes>
    </Suspense>

  );
}

export default App;