import React from 'react';
import Navbar from './Navbar';
import Home from "./Home"
import Project from "./Project"
import About from "./About"
import Contact from "./Contact"
import Footer from './Footer';
import Homee from './Homee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homee />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
  </Router>
  );
};

export default App;
