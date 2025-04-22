import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
    baseURL: 'https://icj24-backend.onrender.com/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Retry mechanism add karo
axiosRetry(axiosInstance, {
    retries: 5, // Maximum 5 baar retry karega
    retryDelay: (retryCount) => {
        return retryCount * 2000; // Har baar retry mein 2s ka delay badhta jayega
    },
    retryCondition: (error) => {
        // Sirf timeout ya network error par retry kare
        return error.code === 'ECONNABORTED' || error.message.includes('Network Error');
    }
});

export default axiosInstance;
