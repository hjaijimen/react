import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/users/login', {
        email,
        password
      });
      const expirationTime = new Date().getTime() + 600000; // 10 minutes from now
      localStorage.setItem('user', JSON.stringify({ ...response.data, expirationTime })); // Include expirationTime
      localStorage.setItem('user_id', response.data.user_id);

      navigate('/dashboard'); // Use navigate to redirect
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
