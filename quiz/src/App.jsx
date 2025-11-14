import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';

import Navbar from './components/Navbar';
import Home from './components/home';

import './App.css';
import Footer from './components/footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
   
 

  

