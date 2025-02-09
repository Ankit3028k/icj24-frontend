import React, { useState } from 'react';
import axiosInstance from './axiosConfig';

const VideoNews = () => {
    // State to store the title and video URL
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [message, setMessage] = useState('');

    // Handle title change
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // Handle video URL change
    const handleVideoUrlChange = (e) => {
        setVideoUrl(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !videoUrl) {
            setMessage('Both title and video URL are required!');
            return;
        }

        try {
            // Replace 'YOUR_API_KEY' with your actual admin API key
            const response = await axiosInstance.post('/video/FeaturedVideo', {
                title,
                video: videoUrl,
            }, {
                headers: {
                    'x-api-key': 'YOUR_API_KEY',  // Admin API Key to authenticate
                }
            });

            setMessage(response.data.message);
            setTitle('');
            setVideoUrl('');
        } catch (error) {
            console.error(error);
            setMessage('Failed to create news video. Try again later.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create a New News Video</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700">Video Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="videoUrl" className="block text-lg font-medium text-gray-700">Video URL</label>
                    <input
                        type="url"
                        id="videoUrl"
                        value={videoUrl}
                        onChange={handleVideoUrlChange}
                        required
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                    Submit Video
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
};

export default VideoNews;
