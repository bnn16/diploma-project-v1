import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import About from './pages/About';
import Home from './pages/Home.js';
import Ka from './pages/Ka';
import Km from './pages/Km';
import Zpu from './pages/Zpu';
import Dzi from './pages/Dzi';
import AT286 from './pages/lectures-Ka/AT286';
import Footer from './components/Footer/Footer';
import HDD from './pages/lectures-zpu/HDD';
import Cables from './pages/lectures-km/Cables';
import Devices from './pages/lectures-km/Devices';
import Lan from './pages/lectures-km/Lan';
import Admin from './pages/lectures-km/Admin';
import Topology from './pages/lectures-km/Topology';
import ByProtocols from './pages/lectures-km/ByProtocols';
import ByArch from './pages/lectures-km/ByArch';
import Packets from './pages/lectures-km/Packets';
import NetworkModels from './pages/lectures-km/NetworkModels';

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
        <Route path="/dzi" element={<Dzi />} />
        <Route path="/ka/286" element={<AT286 />} />
        <Route path="/zpu/hdd" element={<HDD />} />
        <Route path="/km/cables" element={<Cables />} />
        <Route path="/km/devices" element={<Devices />} />
        <Route path="/km/lan" element={<Lan />} />
        <Route path="/km/admin" element={<Admin />} />
        <Route path="/km/topology" element={<Topology />} />
        <Route path="/km/cat_protocols" element={<ByProtocols />} />
        <Route path="/km/architecture" element={<ByArch />} />
        <Route path="/km/packets" element={<Packets />} />
        <Route path="/km/models" element={<NetworkModels />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
