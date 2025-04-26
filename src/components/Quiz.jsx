import { useState } from 'react';
import Question from './questions/Question';

function Quiz({ questions, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleAnswer = (questionId, selectedOptions) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOptions
    });
  };
  
  const handleSubmit = () => {
    // Check correctness
    const currentAnswers = answers[currentQuestion.id] || [];
    const isCorrect = 
      currentAnswers.length === currentQuestion.correctAnswers.length &&
      currentAnswers.every(answer => 
        currentQuestion.correctAnswers.includes(answer)
      );
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  if (showResults) {
    return (
      <div className="results">
        <h2>Quiz Completed!</h2>
        <p>Your score: {score} out of {questions.length}</p>
        <button 
          className="restart-button"
          onClick={onComplete}
        >
          Restart Quiz
        </button>
      </div>
    );
  }
  
  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      
      <Question 
        question={currentQuestion}
        onAnswerChange={(selectedOptions) => 
          handleAnswer(currentQuestion.id, selectedOptions)
        }
        selectedOptions={answers[currentQuestion.id] || []}
      />
      
      <button 
        className="submit-button"
        onClick={handleSubmit}
        disabled={!answers[currentQuestion.id]?.length}
      >
        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
}

export default Quiz;