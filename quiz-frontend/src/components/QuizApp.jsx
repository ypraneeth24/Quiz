import React, { useEffect } from 'react';
import { useQuizContext } from '../contexts/QuizContext';
import Question from './Question';
import Result from './Result';
import axios from 'axios';

const QuizApp = () => {
  const {
    questions,
    setQuestions,
    loading,
    setLoading,
    error,
    setError,
    quizCompleted,
    setQuizTitle,
    setQuizTopic,
    quizTitle,
    quizTopic,
    currentQuestionIndex,
  } = useQuizContext();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/quiz');
        if (response.data.questions && response.data.questions.length > 0) {
          setQuestions(response.data.questions);
          setQuizTitle(response.data.title);
          setQuizTopic(response.data.topic);
        } else {
          throw new Error('No questions available');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [setQuestions, setLoading, setError, setQuizTitle, setQuizTopic]);

  if (loading) {
    return <p>Loading quiz...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{quizTitle}</h1>
        <h3>{quizTopic}</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((questions.length > 0 ? currentQuestionIndex + 1 : 0) /
                questions.length) *
                100}%`,
            }}
          ></div>
        </div>
      </div>
      {!quizCompleted ? <Question /> : <Result />}
    </div>
  );
};

export default QuizApp;

