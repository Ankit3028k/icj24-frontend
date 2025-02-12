import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosInstance from "./Admin/axiosConfig";

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Cart count (can be dynamic in real apps)
  const navigate = useNavigate();
  const searchInputRef = useRef(null); // Ref to track search input container

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleSearchInput = () => {
    setIsSearchVisible((prev) => !prev);
    if (isSearchVisible) setSearchTerm(""); // Clear search term when hiding
  };

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      try {
        const response = await axiosInstance.get(`/news?search=${value}`);
        const sortedResults = sortResultsByRelevance(response.data, value);
        setSearchResults(sortedResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value); // Navigate using react-router
    }
    toggleMobileMenu(); // Close mobile menu after selection
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi"); // 'gi' for case-insensitive matching
    return text.replace(
      regex,
      (match) => `<span class="bg-yellow-300">${match}</span>`
    );
  };

  const sortResultsByRelevance = (results, term) => {
    // Add a function to count the number of matches for the search term in each article
    return results
      .map((news) => {
        const titleMatches = (news.title.match(new RegExp(term, "gi")) || [])
          .length;
        const contentMatches = (
          news.content.match(new RegExp(term, "gi")) || []
        ).length;
        const totalMatches = titleMatches + contentMatches;

        return { ...news, totalMatches }; // Add total match count to the news article
      })
      .sort((a, b) => b.totalMatches - a.totalMatches); // Sort by match count, descending
  };

  // Effect to handle clicks outside of the search input to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchVisible(false); // Close search input if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, []);

  return (
    <div className="m-0">
      <nav className="bg-red-500 py-5">
        <div className="grid grid-cols-12 gap-7 mx-0 text-white">
          <span className="col-span-1"></span>
          <span className="col-span-1">
            <Link to="/">होम</Link>
          </span>

          <div className="dropdown col-span-1 hidden sm:block">
            <span className="dropbtn hidden sm:block">
              <Link to="/मध्यप्रदेश">मध्यप्रदेश</Link>
            </span>
            <div className="dropdown-content bg-white text-black">
              <Link to="/इंदौर">इंदौर</Link>
              <Link to="/भोपाल">भोपाल</Link>
              <Link to="/उज्जैन">उज्जैन</Link>
              <Link to="/जबलपुर">जबलपुर</Link>
            </div>
          </div>

          <span className="col-span-1 hidden sm:block">
            <Link to="/राजनीति">राजनीति</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/क्राइम">क्राइम</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/अध्यात्म">अध्यात्म</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/जरा-हटके">जरा-हटके</Link>
          </span>
          <span className="col-span-1 hidden sm:block">
            <Link to="/टेक्नोलॉजी">टेक्नोलॉजी</Link>
          </span>

          <span className="col-span-1 hidden sm:block"></span>

          {/* Mobile View */}
          <span className="sm:hidden col-span-6"></span>

          <button
            onClick={toggleSearchInput}
            className="text-white focus:outline-none"
            aria-label="Toggle search input"
          >
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
          <div
            ref={searchInputRef} // Attach the ref to the search input container
            className="absolute right-2 top-44 flex items-center bg-white text-black rounded-full shadow-md px-2 py-2 max-w-xs w-50"
          >
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`relative inset-0 z-20 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute pt-1 text-center top-0 right-0 shadow-lg transform transition-transform duration-300 bg-white w-40 text-black ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 bg-white text-black">
            <div className="inline-flex">
              <Link
                to="/मध्यप्रदेश"
                className="block p-2 text-gray-700 hover:text-blue-600"
              >
                मध्यप्रदेश
              </Link>
              <select
                name="locations"
                id="locations"
                onChange={handleLocationChange}
                className="w-full p-2 bg-white text-black border border-gray-300 rounded-md mt-2"
              >
                <option value="">Select City</option>
                <option value="/इंदौर">इंदौर</option>
                <option value="/भोपाल">भोपाल</option>
                <option value="/उज्जैन">उज्जैन</option>
                <option value="/जबलपुर">जबलपुर</option>
              </select>
            </div>

            <Link
              to="/राजनीति"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              राजनीति
            </Link>
            <Link
              to="/क्राइम"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              क्राइम
            </Link>
            <Link
              to="/अध्यात्म"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              अध्यात्म
            </Link>
            <Link
              to="/जरा-हटके"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              जरा-हटके
            </Link>
            <Link
              to="/टेक्नोलॉजी"
              className="block p-2 text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              टेक्नोलॉजी
            </Link>
          </div>
        </div>
      </div>

      {/* Display Search Results */}
      {isSearchVisible && (
        <div ref={searchInputRef}>
          {searchTerm && searchResults.length > 0 && (
            <div
              className="absolute top-20 right-2 bg-white w-72 shadow-xl rounded-lg p-4 max-h-80 overflow-y-auto border border-gray-300"
              style={{ zIndex: 9999 }}
            >
              <ul>
                {searchResults.map((news) => (
                  <li key={news._id} className="mb-4">
                    <Link
                      to={`/full-news/${news.id}`}
                      className="text-black hover:text-blue-600"
                    >
                      <h4
                        className="font-semibold text-lg"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(news.title, searchTerm),
                        }}
                      ></h4>
                      <p
                        className="text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(
                            news.content.substring(0, 100),
                            searchTerm
                          ),
                        }}
                      ></p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
