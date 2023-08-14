import React from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './components/Skills/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter> 
    <Routes >
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='skills' element={<Skills />} />
    <Route path='contact' element={<Contact />} />
    
    
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
