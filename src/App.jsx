import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Cursos from "./paginas/Cursos";
import DetalleCurso from "./paginas/DetalleCurso";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos/:id" element={<DetalleCurso />} />
        <Route path="/cursos" element={<Cursos />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
