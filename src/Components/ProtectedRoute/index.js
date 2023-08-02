import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {

  const outlet = useOutlet();
  let token = Cookies.get('token')
  console.log(":::::::::::::::::::::::::::::::::",token);

  return <>{token ? [outlet] : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
