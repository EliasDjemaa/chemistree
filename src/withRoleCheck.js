import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const withRoleCheck = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const storedRole = localStorage.getItem('userRole');
      setUserRole(storedRole);
      setLoading(false);
    }, []);

    if (loading) {
      // If still loading, render a loading state or null
      return null;
    }

    if (userRole && allowedRoles.includes(userRole)) {
      // Pass the props down to the wrapped component
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withRoleCheck;
