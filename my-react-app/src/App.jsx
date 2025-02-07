import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import Preloader from "./Components/Preloader.jsx";
import Rajniti from "./pages/RajnitiPage.jsx";
import Admin from "./pages/Admin.jsx";
import MpNewsPage from "./pages/MpNewsPage.jsx";
import RajnitiPage from "./pages/RajnitiPage.jsx";
import SpritualPages from "./pages/Spritual.jsx";
import CrimePage from "./pages/CrimePage.jsx";
import JaraHatkePage from "./pages/JaraHatkePage.jsx";
import TechnologyPage from "./pages/TechnologyPage.jsx";

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
    <BrowserRouter >
      {loading && <Preloader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mp-news" element={<MpNewsPage />} />
        <Route path="rajniti"element={<RajnitiPage/>}/>
        <Route path="/crime"element={<CrimePage/>}/>
        <Route path="/spritual"element={<SpritualPages/>}/>
        <Route path = "/jaraHatke"element={<JaraHatkePage/>}/>
        <Route path ="/technology"element={<TechnologyPage/>}/>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
