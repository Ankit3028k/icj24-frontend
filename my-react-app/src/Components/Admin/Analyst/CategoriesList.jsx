// src/components/AdminCategoryList.js
import React from 'react';
import axiosInstance from '../axiosConfig';

const CategoryList = ({ categories, fetchCategories  }) => {
    const handleDelete = async (categoryId) => {
        try {
            await axiosInstance.delete(`/categories/${categoryId}`);
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">Category List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">Category ID</th>
                        <th className="p-2">Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id} className="border-t">
                            <td className="p-2">{category.id}</td>
                            <td className="p-2">{category.name}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;