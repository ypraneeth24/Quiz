
import React from 'react';
import { useQuizContext } from '../contexts/QuizContext';
import '../styles/result.css'; 

const Result = () => {
  const { score, questions } = useQuizContext();

  let resultMessage = '';
  let resultClass = '';
  let emoji = '';
  let animationClass = '';

  if (score >= 30) {
    resultMessage = 'Great job! You scored high!';
    emoji = '😊';
    animationClass = 'high-score';
  } else if (score >= 15) {
    resultMessage = 'Good effort, but there\'s room for improvement.';
    emoji = '😌';
    animationClass = 'medium-score';
  } else {
    resultMessage = 'Better luck next time!';
    emoji = '😔';
    resultClass = 'low-score';
  }

  return (
    <div className='container'>
    <div className={`result-container ${animationClass}`}>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}/{questions.length*4}</p>
      <p>{resultMessage} {emoji}</p>
    </div>
    </div>
  );
};

export default Result;



