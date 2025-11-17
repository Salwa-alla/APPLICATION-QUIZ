import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QUIZ.css';
import questions from '../questions';

function Quiz() {
  const navigate = useNavigate();

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(questions[index]);
  let [answered, setAnswered] = useState(false);
  let [score, setScore] = useState(0);

  const checkAns = (e, answer) => {
    if (answered) return; 
    setAnswered(true);

    if (question.answer === answer) {
        e.target.classList.add("correct");
        setScore(score + 1);
    } else {
        e.target.classList.add("wrong");
    }
  };

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
        setIndex(index + 1);
        setQuestion(questions[index + 1]);
        setAnswered(false);

        let allLi = document.querySelectorAll("li");
        allLi.forEach(li => {
            li.classList.remove("correct");
            li.classList.remove("wrong");
        });
    } else {
        navigate('/result', { state: { score } });
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr/>

      <h2>{index + 1}. {question.question}</h2>

      <ul>
        <li onClick={(e)=> checkAns(e,1)}>{question.option1}</li>
        <li onClick={(e)=> checkAns(e,2)}>{question.option2}</li>
        <li onClick={(e)=> checkAns(e,3)}>{question.option3}</li>
        <li onClick={(e)=> checkAns(e,4)}>{question.option4}</li>
      </ul>

      <button onClick={nextQuestion}>Next</button>

      <div className="index">
        {index + 1} of {questions.length} questions
      </div>

     
    </div>
  );
}

export default Quiz;


 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


























// function Quiz() {
//   const navigate = useNavigate();
//   const [start, setStart] = useState(false);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selected, setSelected] = useState("");
//   const [answered, setAnswered] = useState(false);

//   const handleAnswer = (option) => {
//     setSelected(option);
//     setAnswered(true);

//     // مقارنة النصوص بلا فرق في المسافات والحروف الكبيرة/صغيرة
//     if(option.trim().toLowerCase() === questions[currentQ].answer.trim().toLowerCase()){
//       setScore(score + 1);
//     }
//   }

//   const handleNext = () => {
//     const nextQ = currentQ + 1;
//     if(nextQ < questions.length){
//       setCurrentQ(nextQ);
//       setSelected("");
//       setAnswered(false);
//     } else {
//       navigate('/Result', { state: { score } });
//     }
//   }

//   if(!start){
//     return(
//       <div className="container">
//         <div className="navbar"><h1>My Quiz App</h1></div>
//         <div className="main-content">
//           <h1>Welcome to the Quiz</h1>
//           <button className="start-btn" onClick={()=>setStart(true)}>Start Quiz</button>
//         </div>
//         <div className="footer"><p>© 2025 My Quiz App. All rights reserved.</p></div>
//       </div>
//     )
//   }

//   return(
//     <div className="container">
//       <div className="navbar"><h1>My Quiz App</h1></div>

//       <div className="main-content">
//         <h2>Q: {questions[currentQ].question}</h2>

//         {questions[currentQ].options.map((option, i) => (
//           <button
//             key={i}
//             onClick={() => handleAnswer(option)}
//             className={
//               !answered ? "" :
          
//               option === selected ? "wrong" : ""
//             }
//             disabled={answered}
//           >
//             {option}
//           </button>
//         ))}

//         <button
//           className="next-btn"
//           onClick={handleNext}
//           disabled={!answered}
//         >
//           Suivant
//         </button>
//       </div>

//       <div className="footer"><p>© 2025 My Quiz App. All rights reserved.</p></div>
//     </div>
//   )
// }

// export default Quiz;



