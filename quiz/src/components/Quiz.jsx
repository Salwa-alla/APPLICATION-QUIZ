import React, { useState } from 'react';
import questions from '../questions';
import './QUIZ.css';

export default function Quiz() {
  const [index, setIndex] = useState(0);               // رقم السؤال
  const [score, setScore] = useState(0);               // النتيجة
  const [selectedOption, setSelectedOption] = useState(null); // الجواب لي اختار
  const [lock, setLock] = useState(false);             // منع التبديل من بعد الجواب
  const [showResult, setShowResult] = useState(false); // عرض النتيجة

  const handleAnswer = (option) => {
    if (lock) return; // ما يخليكش تبدل الجواب

    setSelectedOption(option);
    setLock(true);

    if (option === questions[index].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (!lock) return; // خاصك تجاوب قبل ما تدوز

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
      setLock(false);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSelectedOption(null);
      setLock(false);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelectedOption(null);
    setLock(false);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="result">
        <h2>النتيجة النهائية</h2>
        <p>{score} / {questions.length}</p>
        <button onClick={restartQuiz}>إعادة المحاولة</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>Question {index + 1} / {questions.length}</h2>
      <h3>{questions[index].question}</h3>

      <div className="options">
        {questions[index].options.map((option, i) => (
          <button
            key={i}
            className={
              selectedOption
                ? option === questions[index].answer
                  ? "correct"
                  : option === selectedOption
                    ? "wrong"
                    : ""
                : ""
            }
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="navigation">
        
        <button onClick={nextQuestion}>Next</button>
      </div>
    </div>
  );
}

// export default function Quiz() {
//   const [index, setIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [lock, setLock] = useState(false);
//   const [showResult, setShowResult] = useState(false);

//   const question = questions[index];

//   const checkAns = (e, ans) => {
//     if (!lock) {
//       setSelectedOption(ans);
//       setLock(true);
//       if (question.answer === question.options[ans - 1]) {
//         e.target.classList.add("correct");
//         setScore(prev => prev + 1);
//       } else {
//         e.target.classList.add("wrong");
//       }
//     }
//   };

//   const next = () => {
//     if (lock) {
//       if (index === questions.length - 1) {
//         setShowResult(true);
//       } else {
//         setIndex(prev => prev + 1);
//         setSelectedOption(null);
//         setLock(false);
//       }
//     }
//   };

//   const restartQuiz = () => {
//     setIndex(0);
//     setScore(0);
//     setSelectedOption(null);
//     setLock(false);
//     setShowResult(false);
//   };

//   if (showResult) {
//     return (
//       <div className='result-container'>
//         <h1>Quiz Terminé!</h1>
//         <h2>Votre Score: {score} sur {questions.length}</h2>
//         <button onClick={restartQuiz}>Redémarrer le Quiz</button>
//       </div>
//     );
//   }

//   return (
//     <div className='container'>
//       <h1>Quiz App</h1>
//       <hr />
//       <h2>{index + 1}. {question.question}</h2>
//       <ul>
//         <li onClick={(e) => { checkAns(e, 1) }}>{question.options[0]}</li>
//         <li onClick={(e) => { checkAns(e, 2) }}>{question.options[1]}</li>
//         <li onClick={(e) => { checkAns(e, 3) }}>{question.options[2]}</li>
//         <li onClick={(e) => { checkAns(e, 4) }}>{question.options[3]}</li>
//       </ul>
//       <button onClick={next} disabled={!lock}>Next</button>
//       <div className="index">{index + 1} of {questions.length} questions</div>
//     </div>
//   );
// }
 
