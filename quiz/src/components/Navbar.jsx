import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/result">Result</Link>
    </nav>
  )
}

export default Navbar
