// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Update to use Routes and Route in v6
import Header from './components/Header';   
import Projects from './components/Projects';  
import Contact from './components/Contact';  
import './App.css';  
import AboutPage from './components/About';

function App() {
  return (
    <Router>
      {/* Render Header on all pages */}
      <Header />

      {/* Use Routes to define your routes */}
      <Routes>
        {/* Define routes with the element prop */}
        <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
