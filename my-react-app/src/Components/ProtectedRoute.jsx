import { Navigate, Outlet } from 'react-router-dom';

// ProtectedRoute component
const ProtectedRoute = ({ requiredRole }) => {
  // Retrieve token and role from localStorage
  const token = localStorage.getItem('icj24');
  const userRole = localStorage.getItem('role'); // Store role when user logs in

  // If no token or incorrect role, redirect to login page
  if (!token || userRole !== requiredRole) {
    return <Navigate to="/login" />;
  }

  // If everything is fine, render the route content (children components)
  return <Outlet />;
};

export default ProtectedRoute;
