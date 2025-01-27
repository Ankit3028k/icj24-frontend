// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',  // Your API base URL here
    timeout: 5000,                   // Timeout in ms
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed (like Authorization)
    }
});

export default axiosInstance;
