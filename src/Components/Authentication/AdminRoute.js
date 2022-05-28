import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UseAdmin from './../Hooks/UseAdmin';
const AdminRoute = () => {
  const location = useLocation();
  const [admin] = UseAdmin();

  if (!admin) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default AdminRoute;