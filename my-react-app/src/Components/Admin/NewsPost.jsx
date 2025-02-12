import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig';

const AdminNewsForm = ({ editNews, fetchNewses }) => {
    const [formNews, setFormNews] = useState({
        title: '',
        content: '',
        richDescription: '',
        author: '',
        category: '',
        image: null,
        isFeatured: false,  // Add isFeatured field
        isDrafted: false,   // Add isDrafted field
    });

    const [categories, setCategories] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [isEditing, setIsEditing] = useState(!!editNews);

    useEffect(() => {
        if (editNews) {
            const fetchNewsDetails = async () => {
                try {
                    const { data } = await axiosInstance.get(`/news/${editNews}`);
                    setFormNews({
                        title: data.title,
                        content: data.content,
                        richDescription: data.richDescription,
                        author: data.author,
                        category: data.category,
                        image: data.image,
                        isFeatured: data.isFeatured,  // Set isFeatured from the response
                        isDrafted: data.isDrafted,    // Set isDrafted from the response
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
                const { data } = await axiosInstance.get('/categories');
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
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(reader.result);  // Set the base64 string of the image
            };
            reader.readAsDataURL(file);
        }
    };

    // Utility to convert base64 image to Blob
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', formNews.title);
        formData.append('content', formNews.content);
        formData.append('richDescription', formNews.richDescription);
        formData.append('author', formNews.author);
        formData.append('category', formNews.category);
        formData.append('isFeatured', formNews.isFeatured);  // Append isFeatured
        formData.append('isDrafted', formNews.isDrafted);    // Append isDrafted

        // If there's an image, append it as well
        if (imageFile) {
            const blob = dataURItoBlob(imageFile);  // Convert base64 to a Blob object
            formData.append('image', blob, 'image.jpg');
        }

        try {
            if (editNews) {
                await axiosInstance.put(`/news/${editNews}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                await axiosInstance.post('/news', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            fetchNewses();
            resetForm();
        } catch (error) {
            console.error('Error saving News:', error);
        }
    };

    const resetForm = () => {
        setFormNews({
            title: '',
            content: '',
            richDescription: '',
            author: '',
            category: '',
            image: null,
            isFeatured: false,
            isDrafted: false,
        });
        setImageFile(null);
    };

    const handleSwitchMode = () => {
        setIsEditing((prev) => !prev);
        resetForm(); // Reset the form when switching modes
    };

    const handleFeaturedChange = (e) => {
        const { checked } = e.target;
        setFormNews((prev) => ({
            ...prev,
            isFeatured: checked,
            isDrafted: checked, // Set isDrafted to true when isFeatured is checked
        }));
    };

    return (
        <form className="space-y-4 p-4 border border-gray-300 rounded shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold">{isEditing ? 'Edit News' : 'Add News'}</h2>
            <input
                type="text"
                name="title"
                placeholder="News heading"
                value={formNews.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <textarea
                name="content"
                placeholder="Content"
                value={formNews.content}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
                name="richDescription"
                placeholder="Rich description"
                value={formNews.richDescription}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <select
                name="category"
                value={formNews.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
            >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                        {cat.name}
                    </option>
                ))}
            </select>

            <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
            />

            <input
                type="text"
                name="author"
                placeholder="News author"
                value={formNews.author}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <input
                type="checkbox"
                name="isDrafted"
                checked={formNews.isDrafted}
                disabled // This is disabled because it's now controlled by isFeatured
                className="p-2 border border-gray-300 rounded"
            />
            <label className="ml-2">Is Drafted</label>

            <input
                type="checkbox"
                name="isFeatured"
                checked={formNews.isFeatured}
                onChange={handleFeaturedChange}
                className="p-2 border border-gray-300 rounded"
            />
            <label className="ml-2">Is Featured</label>

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
