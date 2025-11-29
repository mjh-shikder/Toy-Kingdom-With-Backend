import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext);
// console.log(loading);

    
    // Tracking user locaton 
    const location = useLocation();
// console.log(location, 'private route');


    

    if (loading) {
        return <Loading></Loading>
    }
   
    if (user) {
    return children
}
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;