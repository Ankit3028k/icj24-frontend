import React, { useState } from 'react';
import axiosInstance from './Admin/axiosConfig.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Register = () => {
  const [fullname, setfullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Analyst');
  const [message, setMessage] = useState(''); // Added message state for showing feedback
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const  response  = await axiosInstance.post('/auth/register', {
         name, email, password, role },{ headers: { 'Content-Type': 'application/json' } } // Ensure the content type is set to JSON
      );
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      setAuthUser(response.data);
      setMessage(response.data.message);
      console.log('Registration successful', response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Error during registration');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md" >
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input 
                type="text" 
                   className="input"
                value={fullname} 
                onChange={(e) => setfullname(e.target.value)} 
                placeholder="Full Name" 
            />
       <input 
                type="email" 
                   className="input"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
            />
        <input 
                type="password" 
                   className="input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="Analyst">Analyst</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Author">Author</option>
          <option value="Modaretor">Modaretor</option>
          
        </select>
        <button className="bg-blue-500 text-white p-2 w-full rounded" onSubmit={submitHandler}>Register</button>
      </form>
    </div>
  );
};

export default Register;
