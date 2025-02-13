// src/pages/AdminPage.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../Components/Admin/axiosConfig';
import AdminNewsForm from '../Components/Admin/NewsPost';
import AdminNewsList from '../Components/Admin/NewsList';
import UserList from '../Components/Admin/UserList';
import AdminCategoryForm from '../Components/Admin/AdminCategoryForm';
import AdminCategoryList from '../Components/Admin/CategoriesList';
import Register from '../Components/Auth/Register'; // Corrected import
import VideoNews from '../Components/Admin/VideoAdminPost'; // Import VideoNews Component
import VideoNewsList from '../Components/Admin/VideoNewsList';
import DraftedNews from '../Components/Admin/DraftedNews';
import IsFeaturedNews from '../Components/Admin/isFeaturedNews';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [newses, setNewses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [editNews, setEditNews] = useState(null);
  const [editUsers, setEditUsers] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch Newses
  const fetchNewses = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/news');
      setNewses(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching Newses');
    } finally {
      setLoading(false);
    }
  };

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/auth/users');
      setUsers(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  // Fetch Categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/categories');
      setCategories(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
      // Redirect or update UI after logout
      window.location.href = '/login'; // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  useEffect(() => {
    fetchNewses();
    fetchCategories();
    fetchUsers(); // Make sure to call fetchUsers here if you need users data
  }, []);

  // Handling loading and errors
  if (loading) {
    return <div className="text-center py-10 text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="flex md:flex-row flex-col">
        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden text-gray-700 mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? '✖' : '☰'}
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'block' : 'hidden'} md:block col-span-3 border-r border-gray-300 bg-white shadow-lg`}>
          <div className="p-4">
            <img src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/icj24/mf9hhph8dvlapioyme2j" alt="Logo" className="h-12 w-auto mx-auto" />
            <ul className="flex flex-col space-y-1">
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'dashboard' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('dashboard'); setIsSidebarOpen(false); }}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'users' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('users'); setIsSidebarOpen(false); }}
                >
                  User
                </button>
              </li>
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'newses' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('newses'); setIsSidebarOpen(false); }}
                >
                  News
                </button>
              </li>
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'categories' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('categories'); setIsSidebarOpen(false); }}
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'videoNews' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('videoNews'); setIsSidebarOpen(false); }}
                >
                  Video News
                </button>
              </li>
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'draftedNews' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('draftedNews'); setIsSidebarOpen(false); }}
                >
                  Drafted News
                </button>
              </li>
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 ${activeSection === 'IsFeatured' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('IsFeatured'); setIsSidebarOpen(false); }}
                >
                  Display News
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-9 p-4">
          {activeSection === 'dashboard' && <h2 className="text-2xl font-bold">Dashboard</h2>}
          {activeSection === 'users' && (
            <>
              <Register editUsers={editUsers} fetchUsers={fetchUsers} />
              <UserList users={users} fetchUsers={fetchUsers} setEditUsers={setEditUsers} />
            </>
          )}
          {activeSection === 'newses' && (
            <>
              <AdminNewsForm editNews={editNews} fetchNewses={fetchNewses} />
              <AdminNewsList newses={newses} fetchNewses={fetchNewses} setEditNews={setEditNews} />
            </>
          )}
          {activeSection === 'categories' && (
            <>
              <AdminCategoryForm editCategory={editCategory} fetchCategories={fetchCategories} />
              <AdminCategoryList categories={categories} fetchCategories={fetchCategories} setEditCategory={setEditCategory} />
            </>
          )}
          {activeSection === 'videoNews' && (
            <>
            <VideoNews />
            <VideoNewsList/>
            </>
          )}
        </div>
          {activeSection === 'draftedNews' && (
            <>
            <DraftedNews/>
            </>
          )}
          {activeSection === 'IsFeatured' && (
            <>
            <IsFeaturedNews/>
            </>
          )}
        
      </div>

      {/* Logout Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
