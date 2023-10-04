import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem('google-login')) || {};
  return token?.token ? children : <Navigate to={'/login'} state={location.pathname} replace={true}/>;
}

export default PrivateRoutes;