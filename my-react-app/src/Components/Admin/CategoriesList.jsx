import React, { useEffect, useState } from 'react';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    // Fetch categories data from the API
    useEffect(() => {
        fetch('http://localhost:3000/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    // Function to handle category deletion
    const deleteCategory = (id) => {
        fetch(`http://localhost:3000/api/categories/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(() => {
            setCategories(categories.filter(category => category.id !== id));
        })
        .catch(error => console.error('Error deleting category:', error));
    };

    // Function to handle category editing (just a placeholder here)
    const editCategory = (id) => {
        // You would typically show a form to edit the category
        console.log(`Edit category with ID: ${id}`);
    };

    return (
        <div>
            <h2>Categories List</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {category.name}
                        <button onClick={() => editCategory(category.id)}>Edit</button>
                        <button onClick={() => deleteCategory(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;
