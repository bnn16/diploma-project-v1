import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import About from './pages/About';
import Home from './pages/Home.js';
import Ka from './pages/Ka';
import Km from './pages/Km';
import Zpu from './pages/Zpu';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/zpu" element={<Zpu />} />
        <Route path="/km" element={<Km />} />
        <Route path="/ka" element={<Ka />} />
      </Routes>
    </>
  );
}

export default App;
