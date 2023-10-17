import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const loginToken = JSON.parse(localStorage.getItem('google-login')) || {};
  const isAuthenticated = loginToken.token;

  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to={location.state} replace={true} />;
  }

  return isAuthenticated ? children : <Navigate to={'/login'} state={location.pathname} replace={true} />;
}

export default PrivateRoutes;

