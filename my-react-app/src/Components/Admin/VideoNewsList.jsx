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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Video News</h2>
            <div>
                {videoNews.length === 0 ? (
                    <p>No video news available.</p>
                ) : (
                    videoNews.map((news, index) => (
                        <div key={index} className="video-news-item">
                            
                            {news.video && (
                                <div>
                                    <iframe
                                        title={news.title}
                                        width="560"
                                        height="315"
                                        src={news.video}  // Assuming it's a video URL like YouTube, Vimeo, etc.
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className='h-25 w-25'
                                    ></iframe>
                                </div>
                            )}
                            <h3>{news.title}</h3>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default VideoNewsList;
