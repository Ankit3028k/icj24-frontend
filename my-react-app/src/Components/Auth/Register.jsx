import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import axiosInstance from '../Admin/axiosConfig.js';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Analyst');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // const { setAuthUser } = useAuth();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/register', {
        name, email, password, role,
      }, { headers: { 'Content-Type': 'application/json' } });

      localStorage.setItem('icj24', JSON.stringify(response.data));
      setAuthUser(response.data);
      setMessage('Registration successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during registration:', error);
      // alert(error.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center   bg-gray-50">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <div>
          <input
            type="text"
            className="input border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <div>
          <input
            type="email"
            className="input border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            className="input border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Analyst">Analyst</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Author">Author</option>
            <option value="Moderator">Moderator</option>
          </select>
        </div>
        <div>
          <button type='submit' className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </div>
        {message && <p className="mt-2 text-center text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
