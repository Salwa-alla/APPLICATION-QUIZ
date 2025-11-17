import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/quiz" className={location.pathname === '/quiz' ? 'active' : ''}>Quiz</Link>
      <Link to="/result" className={location.pathname === '/result' ? 'active' : ''}>Result</Link>
    </nav>
  );
};

export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/quiz">Quiz</Link>
//       <Link to="/result">Result</Link>
//     </nav>
//   )
// }

// export default Navbar
