import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import './App.css';
import Preloader from './Components/Preloader.jsx';
import Rajniti from './pages/RajnitiPage.jsx';
function App() {
  const [loading, setLoading] = useState(true);

  // Simulate an API call or page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 3 seconds (or your loading logic)
    }, 3000);
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <BrowserRouter>
      {loading && (<Preloader/>)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mpnews" element={<Rajniti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
