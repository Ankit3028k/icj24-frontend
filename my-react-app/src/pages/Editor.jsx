import React, { useState, useEffect } from 'react';
import axiosInstance from '../Components/Admin/axiosConfig'; // Assuming axiosInstance is properly set up
import AdminNewsForm from '../Components/Admin/NewsPost';
import AdminNewsList from '../Components/Admin/NewsList';

function Editor() {
  const [newses, setNewses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingNewses, setLoadingNewses] = useState(true); // Separate loading for newses
  const [loadingCategories, setLoadingCategories] = useState(true); // Separate loading for categories
  const [errorNewses, setErrorNewses] = useState(null); // Separate error state for newses
  const [errorCategories, setErrorCategories] = useState(null); // Separate error state for categories
  const [activeSection, setActiveSection] = useState('newses');
  const [editNews, setEditNews] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchNewses = async () => {
    setLoadingNewses(true);
    try {
      const response = await axiosInstance.get('/news');
      setNewses(response.data);
      setErrorNewses(null);
    } catch (error) {
      setErrorNewses('Error fetching Newses');
    } finally {
      setLoadingNewses(false);
    }
  };

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await axiosInstance.get('/categories');
      setCategories(response.data);
      setErrorCategories(null);
    } catch (error) {
      setErrorCategories('Error fetching Categories');
    } finally {
      setLoadingCategories(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  useEffect(() => {
    fetchNewses();
    fetchCategories();
  }, []);

  if (loadingNewses || loadingCategories) {
    return <div className="text-center py-10 text-gray-700">Loading...</div>;
  }

  if (errorNewses || errorCategories) {
    return <div className="text-center py-10 text-red-600">Error: {errorNewses || errorCategories}</div>;
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
            <img src="https://icj24.com/wp-content/uploads/2024/08/ICJ-LOGO-24-96x96.jpeg" alt="Logo" className="h-12 w-auto mx-auto" />
            <ul className="flex flex-col space-y-1">
              <li>
                <button
                  className={`nav-link block px-4 py-2 rounded-md text-gray-700 pt-4${activeSection === 'newses' ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                  onClick={() => { setActiveSection('newses'); setIsSidebarOpen(false); }}
                >
                  News
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-9 p-4">
          {activeSection === 'newses' && (
            <>
              <AdminNewsForm editNews={editNews} fetchNewses={fetchNewses} />
              <AdminNewsList newses={newses} fetchNewses={fetchNewses} setEditNews={setEditNews} />
            </>
          )}
        </div>
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
}

export default Editor;
