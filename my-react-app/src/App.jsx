import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import Preloader from "./Components/Preloader.jsx";
import RajnitiPage from "./pages/RajnitiPage.jsx";
import Admin from "./pages/Admin.jsx";
import MpNewsPage from "./pages/MpNewsPage.jsx";
import IndorePage from "./pages/IndorePage.jsx";
import BhopalPage from "./pages/BhopalPage.jsx";
import UjjainPage from "./pages/UjjainPage.jsx";
import JabalpurPage from "./pages/JabalpurPage.jsx";
import SpritualPages from "./pages/Spritual.jsx";
import Login from "./Components/Auth/Login.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Editor from "./pages/Editor.jsx";
import Analyst from "./pages/Analyst.jsx";
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
    <BrowserRouter>
      {loading && <Preloader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/मध्यप्रदेश" element={<MpNewsPage />} />
        <Route path="/राजनीति" element={<RajnitiPage />} />
        <Route path="/spritual" element={<SpritualPages />} />
        <Route element={<ProtectedRoute requiredRole="Admin" />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<ProtectedRoute requiredRole="Editor" />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
        <Route element={<ProtectedRoute requiredRole="Analyst" />}>
          <Route path="/analyst" element={<Analyst />} />
          {/* Add protected routes for other pages */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />/
        <Route path="/क्राइम" element={<CrimePage />} />
        <Route path="/अध्यात्म" element={<SpritualPages />} />
        <Route path="/जरा-हटके" element={<JaraHatkePage />} />
        <Route path="/टेक्नोलॉजी" element={<TechnologyPage />} />
        <Route path="/इंदौर" element={<IndorePage />} />
        <Route path="/भोपाल" element={<BhopalPage />} />
        <Route path="/उज्जैन" element={<UjjainPage />} />
        <Route path="/जबलपुर" element={<JabalpurPage />} />
      

        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
