import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>React Quiz App</h1>
      <p>Test your knowledge with this fun quiz!</p>
      <Link to="/quiz">
        <button>Start the Quiz</button>
      </Link>
    </div>
  )
}
