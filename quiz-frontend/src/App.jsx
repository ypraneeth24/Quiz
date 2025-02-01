import React from 'react';
import { QuizProvider } from './contexts/QuizContext.jsx';
import QuizApp from './components/QuizApp.jsx';
import './styles/quiz.css';

const App = () => {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
};

export default App;


