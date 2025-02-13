import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosConfig';

const VideoNewsList = () => {
    const [videoNews, setVideoNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch video news from the backend
    useEffect(() => {
        const fetchVideoNews = async () => {
            try {
                const response = await axiosInstance.get('/video/FeaturedVideo');  // Make sure the URL matches your backend route
                setVideoNews(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching video news');
                setLoading(false);
            }
        };

        fetchVideoNews();
    }, []);

    // Delete video news
    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/video/FeaturedVideo/${id}`);  // Make sure this matches your backend DELETE route
            setVideoNews((prevVideos) => prevVideos.filter((video) => video.id !== id));  // Remove video from state
            alert('Video deleted successfully');
        } catch (err) {
            setError('Error deleting video');
        }
    };

    if (loading) {
        return <div className="text-center text-lg text-gray-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Video News</h2>
            <div>
                {videoNews.length === 0 ? (
                    <p className="text-center text-lg text-gray-500">No video news available.</p>
                ) : (
                    videoNews.map((news) => (
                        <div key={news.id} className="video-news-item mb-6 p-4 border rounded-lg shadow-md bg-white">
                            {news.video && (
                                <div className="mb-4">
                                    <iframe
                                        title={news.title}
                                        width="100%"
                                        height="315"
                                        src={news.video}  // Assuming it's a video URL like YouTube, Vimeo, etc.
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
                            <button
                                onClick={() => handleDelete(news.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Delete Video
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default VideoNewsList;
