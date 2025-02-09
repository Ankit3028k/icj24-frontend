import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import React Router's useNavigate

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for tracking loading
  const navigate = useNavigate(); // Hook for navigation
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
  
    setError('');
    setLoading(true); // Set loading state to true
  
    try {
      const response = await fetch('https://icj24-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        setError(data.msg || 'Invalid email or password.');
        setLoading(false); // Set loading state to false
        return;
      }
  
      console.log(data.token);
  
      // Store JWT token and role in localStorage for further requests
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);  // Save role to localStorage
  
      // Check role and navigate
      const { role } = data;
      if (role === 'Admin') {
        navigate('/admin');
      } else if (role === 'Editor') {
        navigate('/editor');
      } else if (role === 'Analyst') {
        navigate('/analyst');
      } else {
        setError('Unauthorized role.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false); // Set loading state to false
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="https://icj24.com/wp-content/uploads/2024/08/ICJ-LOGO-24-96x96.jpeg" alt="Logo" className="h-12 w-auto" />
        </div>
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          disabled={loading} // Disable the button when loading
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
