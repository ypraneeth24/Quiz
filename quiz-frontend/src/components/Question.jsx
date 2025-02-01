import React, { useState } from 'react';
import { useQuizContext } from '../contexts/QuizContext';

const Question = () => {
  const [showSolution, setShowSolution] = useState(false); 
  const {
    questions,
    currentQuestionIndex,
    handleAnswer,
  } = useQuizContext();

  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion)

  const toggleSolution = () => {
    setShowSolution((prev) => !prev); 
  };

  return (
    <div className='container'>
    <div className="question-container">
      <h2>{currentQuestionIndex+1} . {currentQuestion?.description}</h2>
      <div className='option-container'>
        {currentQuestion?.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(option.is_correct)}
          >
            {index+1} . {option.description}
          </button>
        ))}
      </div>
      
      <button className="solution-button" onClick={toggleSolution}>
        View Solution
      </button>

      {showSolution && (
        <div className="solution-text">
          <p>{currentQuestion.detailed_solution}</p>
          <button className="close-solution" onClick={toggleSolution}>
            Close
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Question;



