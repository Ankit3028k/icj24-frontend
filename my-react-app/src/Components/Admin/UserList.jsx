import React, { useState } from 'react';
import axiosInstance from './axiosConfig.js';

const UserList = ({ users, fetchUsers, setEditUser }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleDelete = async (userId) => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            await axiosInstance.delete(`/auth/users/${userId}`);
            setSuccessMessage('User successfully deleted');
            fetchUsers();
        } catch (error) {
            setError('Error deleting user. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            {successMessage && <div className="bg-green-200 text-green-800 p-2">{successMessage}</div>}
            {error && <div className="bg-red-200 text-red-800 p-2">{error}</div>}

            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">User id</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Role</th>
                        <th className="p-2">E-mail</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border-t">
                            <td className="p-2">{user._id}</td>
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.role}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                                    onClick={() => handleDelete(user._id)}
                                    disabled={loading}
                                >
                                    {loading ? 'Deleting...' : 'Delete'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
