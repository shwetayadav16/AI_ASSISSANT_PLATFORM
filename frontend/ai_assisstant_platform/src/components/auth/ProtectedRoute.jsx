import React from 'react'
import{Navigate,Outlet} from "react-route-dom";
const ProtectedRoute = () => {
    const isAuthenticated=true;
    const loading=false;
    if(loading){
        return<div>Loading...</div>
    }
  return isAuthenticated ?(
    <AppLayout>
        <Outlet></Outlet>
    </AppLayout>
  ) : (
    <Navigate to="/login" replace></Navigate>
  );
};

export default ProtectedRoute;
