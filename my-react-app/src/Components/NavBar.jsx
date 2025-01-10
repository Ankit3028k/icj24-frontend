import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaHome, FaThList, FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import { GiShoppingBag } from 'react-icons/gi';

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
    <div className="m-0">
      <nav className="bg-red-500 py-5">
        <div className="inline-grid grid-cols-12 gap-7 mx-0 text-white">
          
          <span className="col-span-1"></span>
          <span className="col-span-1  "><Link to="/">होम</Link></span>
          
          <div className="dropdown col-span-1 mobile-hidden">
            <span className="dropbtn">
              <Link to="#">मध्यप्रदेश</Link>
            </span>
            <div className="dropdown-content bg-white text-black">
              <Link to="#">इंदौर</Link>
              <Link to="#">भोपाल</Link>
              <Link to="#">उज्जैन</Link>
              <Link to="#">जबलपुर</Link>
            </div>
          </div>
          
          <span className="col-span-1 mobile-hidden"><Link to="#">राजनीति</Link></span>
          <span className="col-span-1 mobile-hidden"><Link to="#">क्राइम</Link></span>
          <span className="col-span-1 mobile-hidden"><Link to="#">अध्यात्म</Link></span>
          <span className="col-span-1 mobile-hidden"><Link to="#">Jara Hatke</Link></span>
          <span className="col-span-1 mobile-hidden"><Link to="#">टेक्नोलॉजी</Link></span>
          
          <span className="col-span-1"></span>
          {/* for mobile view span */}
          <span className="col-span-6"></span>
          <button onClick={toggleSearchInput} className="text-white focus:outline-none" aria-label="Toggle search input">
            <FaSearch className="w-6 h-6" />
          </button>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Input */}
        {isSearchVisible && (
          <div className="absolute right-2 top-16 flex items-center border rounded bg-white text-black px-2">
            <input
              type="text"
              placeholder="Search news"
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-grow focus:outline-none"
              autoFocus
            />
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0   transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMobileMenu}
      >
        <div className={`fixed pt-12 top-14 right-0   shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full  '}`}>
          <div className="p-4">
            
            <Link to="/" className="block text-gray-700 flex items-center hover:text-blue-600 transition duration-300 p-2" onClick={toggleMobileMenu}>
            मध्यप्रदेश
            </Link>
            <Link to="/categories" className="block text-gray-700 flex items-center hover:text-blue-600 transition duration-300 p-2" onClick={toggleMobileMenu}>
            राजनीति
            </Link>
            <Link to="/products" className="block text-gray-700 flex items-center hover:text-blue-600 transition duration-300 p-2" onClick={toggleMobileMenu}>
            अध्यात्म
            </Link>
            <Link to="/cart" className="block text-gray-700 flex items-center hover:text-blue-600 transition duration-300 p-2" onClick={toggleMobileMenu}>
            Jara Hatke
            </Link>
            <Link to="/cart" className="block text-gray-700 flex items-center hover:text-blue-600 transition duration-300 p-2" onClick={toggleMobileMenu}>
            टेक्नोलॉजी
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
