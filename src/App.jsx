import { useState } from 'react';
import Quiz from './components/Quiz';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

// Sample questions for initial development
const sampleQuestions = [
  {
    id: 1,
    type: 'single',
    question: 'What hook is used for state in React?',
    options: ['useStatus', 'useState', 'useStore', 'useSet'],
    correctAnswers: ['useState']
  },
  {
    id: 2,
    type: 'single',
    question: 'Which of the following is NOT a React hook?',
    options: ['useEffect', 'useContext', 'useHistory', 'useReducer'],
    correctAnswers: ['useHistory']
  },
  {
    id: 3,
    type: 'single',
    question: 'What does JSX stand for?',
    options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript Syntax', 'Java Syntax Extension'],
    correctAnswers: ['JavaScript XML']
  }
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  
  const startQuiz = () => {
    setQuizStarted(true);
  };
  
  const resetQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {!quizStarted ? (
          <div className="welcome-screen">
            <h2>Welcome to the React Quiz!</h2>
            <p>Test your knowledge of React fundamentals.</p>
            <button 
              className="start-button"
              onClick={startQuiz}
            >
              Start Quiz
            </button>
          </div>
        ) : (
          <Quiz 
            questions={sampleQuestions} 
            onComplete={resetQuiz} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;