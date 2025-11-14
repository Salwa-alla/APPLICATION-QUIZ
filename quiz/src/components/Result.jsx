import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import questions from '../questions';
import './Result.css';

export default function Result() {
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <h2>Your Score: {score} out of {questions.length}</h2>
      <Link to="/quiz">
        <button>Restart Quiz</button>
      </Link>
    </div>
  );
}
