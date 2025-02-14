// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.249.40:3000/api',  // Your API base URL here
    timeout: 5000,                   // Timeout in ms
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed (like Authorization)
    }
});

export default axiosInstance;
