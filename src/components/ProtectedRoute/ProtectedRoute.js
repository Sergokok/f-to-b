import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedIn, ...props }) => {
    return (
        <Route>
            {loggedIn ? <Component {...props} /> : <Navigate replace to="/" />}
        </Route>
    );
}

export default ProtectedRoute;
