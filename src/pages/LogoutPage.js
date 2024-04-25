import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Logout = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle logout
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    // Redirect to the login page
    navigate('/login');
  };

  // Call handleLogout when component mounts
  React.useEffect(() => {
    handleLogout();
  }, []);

  // Render null because the component redirects immediately
  return null;
};

export default Logout;
