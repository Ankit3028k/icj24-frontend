import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

const NewsList = ({ newses, fetchNewses }) => {
    const [loading, setLoading] = useState(false);
    const [modifiedNewses, setModifiedNewses] = useState({});

    const handleDelete = async (newsId) => {
        setLoading(true);
        try {
            await axiosInstance.delete(`/news/${newsId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
           
        } catch (error) {
            console.error('Error deleting Newse:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin News List</h2>
            {loading && <div className="text-center text-blue-500">Loading...</div>}
            <div className="space-y-6">
                {newses.map((news) => (
                    <div key={news._id} className="flex items-center justify-between p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-4">
                            <img className="w-20 h-20 object-cover rounded-lg" src={news.image} alt={news.title} />
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{news.title}</h3>
                                <p className="text-sm text-gray-600">{news.content}</p>
                                <p className="text-sm text-gray-500">Author: {news.author}</p>
                                <p className="text-sm text-gray-400">{news.category?.name || 'No Category'}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;
