// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Check if the user is authenticated based on local storage
  const isAuthenticated = !!localStorage.getItem('user');

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">My App</Link>
        <nav>
          <ul className="flex">
            <li className="ml-4">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="ml-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="ml-4">
              <Link to="/contact">Contact</Link>
            </li>
            {/* Conditionally render based on authentication status */}
            {!isAuthenticated && (
              <>
                <li className="ml-4">
                  <Link to="/login">Login</Link>
                </li>
                <li className="ml-4">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
