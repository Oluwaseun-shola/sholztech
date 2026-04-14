import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Course from "./pages/Course";
import AllCoursesPage from "./pages/AllCoursesPage";
import Register from "./pages/Register";
import ContactPage from "./pages/ContactPage";
import ScholarshipPage from "./pages/ScholarshipPage";


const App = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/:course" element={<Course />} />
        <Route path="/AllCourses" element={<AllCoursesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/scholarship" element={<ScholarshipPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
