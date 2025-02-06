import React, { useState } from 'react';
import axiosInstance from './axiosConfig';

const AdminNewsList = ({ newses, fetchNewses, setEditNews }) => {
    const [loading, setLoading] = useState(false);
    const [modifiedNewses, setModifiedNewses] = useState({});

    const handleDelete = async (newsId) => {
        setLoading(true);
        try {
            await axiosInstance.delete(`/newses/${newsId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            fetchNewses();
        } catch (error) {
            console.error('Error deleting Newse:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFeaturedToggle = async (news) => {
        const newFeaturedStatus = !news.isFeatured;
        setModifiedNewses((prev) => ({
            ...prev,
            [news._id]: newFeaturedStatus,
        }));

        try {
            await axiosInstance.put(`/newses/${news._id}`, { featured: newFeaturedStatus }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            fetchNewses();
        } catch (error) {
            console.error('Error updating featured status:', error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">Admin News List</h2>
            {loading && <div>Loading...</div>}
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">Image</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Author</th>
                        <th className="p-2">Category</th>
                        
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newses.map((news) => (
                        <tr key={news._id} className="border-t">
                            <td className="p-2">
                                <img src={news.image} alt={news.name} className="w-12 h-12 object-cover" />
                            </td>
                            <td className="p-2">{news.name}</td>
                            <td className="p-2">${news.author}</td>
                            <td className="p-2">{news.category?.name || 'No Category'}</td>
                          
                           
                            <td className="p-2 space-x-2">
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400"
                                    onClick={() => setEditNews(news._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                                    onClick={() => handleDelete(news._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminNewsList;