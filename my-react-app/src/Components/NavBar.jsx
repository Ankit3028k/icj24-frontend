import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleSearchInput = () => {
    setIsSearchVisible(prev => !prev);
    if (isSearchVisible) setSearchTerm(''); // Clear search term when hiding
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="m-0 relative">
      <nav className="bg-red-500 py-5 relative z-10">
        <div className="grid grid-cols-12 gap-7 mx-0 text-white">
          <span className="col-span-1"></span>
          <span className="col-span-1"><Link to="/">होम</Link></span>
          <span className="col-span-1 hidden sm:block"><Link to="/mp-news">मध्यप्रदेश</Link></span>
          <span className="col-span-1 hidden sm:block"><Link to="/rajniti">राजनीति</Link></span>
          <span className="col-span-1 hidden sm:block"><Link to="/crime">क्राइम</Link></span>
          <span className="col-span-1 hidden sm:block"><Link to="/spritual">अध्यात्म</Link></span>
          <span className="col-span-1 hidden sm:block"><Link to="/jaraHatke">Jara Hatke</Link></span>
          <span className="col-span-1 hidden sm:block"><Link to="#">टेक्नोलॉजी</Link></span>
          
          <span className="col-span-1  sm:block"></span>
          <span className="col-span-6 mobile-view  sm:block"></span>
          <button onClick={toggleSearchInput} className="text-white focus:outline-none">
            <FaSearch className="w-6 h-6" />
          </button>
          <button className="md:hidden  text-white focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Search Input */}
      {isSearchVisible && (
        <div className="absolute right-2 top-44 flex items-center bg-white text-black rounded-full shadow-md px-2 py-2 max-w-xs w-50">
          <input
            type="text"
            placeholder="Search news"
            value={searchTerm}
            onChange={handleSearchChange} 
            className="flex-grow border-none outline-none p-2 text-black"
            autoFocus
          />
          <button className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:bg-gray-700 focus:outline-none">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      <div 
        className={`relative inset-0 z-20 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMobileMenu}
      >
        <div className={`absolute pt-1 text-center top-0 right-0 shadow-lg transform transition-transform duration-300 bg-white w-40 text-black ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link to="/mp-news" className="block p-2 text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>मध्यप्रदेश</Link>
          <Link to="/rajniti" className="block p-2 text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>राजनीति</Link>
          <Link to="/crime" className="block p-2 text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>क्राइम</Link>
          <Link to="/spritual" className="block p-2 text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>अध्यात्म</Link>
          <Link to="#" className="block p-2 text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>Jara Hatke</Link>
          <Link to="#" className="block p-2 text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>टेक्नोलॉजी</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
