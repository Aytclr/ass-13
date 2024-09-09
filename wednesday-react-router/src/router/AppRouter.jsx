import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../component/Navbar/Navbar.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact.jsx";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
