// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://icj24-backend.onrender.com/api',  // Your API base URL here
    timeout: 10000,                   // Timeout in ms
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed (like Authorization)
    }
});

export default axiosInstance;
