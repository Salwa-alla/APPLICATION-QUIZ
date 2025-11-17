import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
         <div className="content"> </div>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/result">Result</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;


   
 

  

