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
import Login from "./Components/Auth/Login.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Editor from "./pages/Editor.jsx";
import Analyst from "./pages/Analyst.jsx";

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
        <Route path="/spritual"element={<SpritualPages/>}/>
        <Route element={<ProtectedRoute requiredRole="Admin"/>}>
          <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<ProtectedRoute requiredRole="Editor"/>}>
          <Route path="/editor" element={<Editor />} />
          </Route>
          <Route element={<ProtectedRoute requiredRole="Analyst"/>}>
          <Route path="/analyst" element={<Analyst />} />
          {/* Add protected routes for other pages */}
        </Route>
       
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />/
      </Routes>
    </BrowserRouter>
  );
}

export default App;
