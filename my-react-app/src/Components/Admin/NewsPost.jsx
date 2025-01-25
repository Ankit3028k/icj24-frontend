import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig.js';

const AdminNewsForm = ({ editNews, fetchNews }) => {
    const [formNews, setFormNews] = useState({
        title: '',
        content: '',
        richDescription: '',
        image: null,
        category: '',
    });

    const [categories, setCategories] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [isEditing, setIsEditing] = useState(!!editNews); // To track if we are in edit mode or add mode

    useEffect(() => {
        if (editNews) {
            const fetchNewsDetails = async () => {
                try {
                    const { data } = await axiosInstance.get(`/api/news/${editNews}`);
                    setFormNews({
                        title: data.title,
                        content: data.content,
                        richDescription: data.richDescription,
                        image: data.image,
                        category: data.category,
                    });
                } catch (error) {
                    console.error('Error fetching News details:', error);
                }
            };
            fetchNewsDetails();
        }
    }, [editNews]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axiosInstance.get('/api/categories');
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormNews((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleFeatureChange = (e) => {
        setFormNews((prev) => ({ ...prev, isFeatured: e.target.value === 'true' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            Object.entries(formNews).forEach(([key, value]) => {
                formData.append(key, value);
            });
            if (imageFile) formData.append('image', imageFile);

            if (editNews) {
                await axiosInstance.put(`/api/news/${editNews}`, formData);
            } else {
                await axiosInstance.post('/api/news/', formData);
            }

            fetchNews();
            resetForm();
        }  catch (error) {
            console.error('Error saving News:', error.response ? error.response.data : error.message);
        }
        
    };

    const resetForm = () => {
        setFormNews({
            title: '',
            content: '',
            richDescription: '',
            category: '',
            image: null,
        });
        setImageFile(null);
    };

    const handleSwitchMode = () => {
        setIsEditing((prev) => !prev);
        resetForm(); // Reset the form when switching modes
    };

    return (
        <form className="space-y-4 p-4 border border-gray-300 rounded shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold">{isEditing ? 'Edit News' : 'Add News'}</h2>
            <input type="text" name="title" placeholder="News Title" value={formNews.title} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
            <textarea name="content" placeholder="Content" value={formNews.content} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
            <textarea name="richDescription" placeholder="Rich Description" value={formNews.richDescription} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
            <select name="category" value={formNews.category} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
            </select>
            <input type="file" name="image" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded" required={!isEditing} />

            <div className="flex space-x-4">
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500">
                    {isEditing ? 'Update News' : 'Add News'}
                </button>
                <button
                    type="button"
                    onClick={handleSwitchMode}
                    className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
                >
                    {isEditing ? 'Switch to Add News' : 'Switch to Edit News'}
                </button>
            </div>
        </form>
    );
};

export default AdminNewsForm;
