// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user'); // Check if user is authenticated

    return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
