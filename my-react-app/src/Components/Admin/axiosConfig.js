import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
    baseURL: 'https://icj24-backend.onrender.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Retry mechanism (improved)
axiosRetry(axiosInstance, {
    retries: 5, // 2-3 retries are usually enough
    retryDelay: axiosRetry.exponentialDelay, // built-in exponential delay (1s, 2s, 4s)
    retryCondition: (error) => {
        // Retry on timeout, network error, and 5xx errors
        return (
            axiosRetry.isNetworkOrIdempotentRequestError(error) ||
            error.code === 'ECONNABORTED' ||
            (error.response && error.response.status >= 500)
        );
    }
});

export default axiosInstance;
