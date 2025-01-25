// src/components/AdminCategoryForm.js
import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig.js';

const AdminCategoryForm = ({ editCategory, fetchCategories }) => {
    const [formCategory, setFormCategory] = useState({ name: '' });

    useEffect(() => {
        if (editCategory) {
            const fetchCategoryDetails = async () => {
                try {
                    const { data } = await axiosInstance.get(`/api/categories/${editCategory}`);
                    setFormCategory({ name: data.name });
                } catch (error) {
                    console.error('Error fetching category details:', error);
                }
            };
            fetchCategoryDetails();
        }
    }, [editCategory]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormCategory((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (editCategory) {
                await axiosInstance.put(`/api/categories/${editCategory}`, formCategory);
            } else {
                await axiosInstance.post('/api/categories', formCategory);
            }
    
            // Manually fetch the categories
            const { data } = await axiosInstance.get('/api/categories');
            console.log(data); // Process the fetched categories or update your state accordingly
    
            setFormCategory({ name: '' }); // Reset form
        } catch (error) {
            if (error.response) {
                console.error('Error saving category:', error.response.data);
            } else if (error.request) {
                console.error('No response from server:', error.request);
            } else {
                console.error('Error creating request:', error.message);
            }
        }
    };
    
    
    return (
        <form className="space-y-4 p-4 border border-gray-300 rounded shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold">{editCategory ? 'Edit Category' : 'Add Category'}</h2>
            <input
                type="text"
                name="name"
                placeholder="Category Name"
                value={formCategory.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500">
                {editCategory ? 'Update Category' : 'Add Category'}
            </button>
        </form>
    );
};

export default AdminCategoryForm;