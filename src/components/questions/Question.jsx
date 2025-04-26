import React from 'react';
import Option from './Option';

function Question({ question, onAnswerChange, selectedOptions }) {
  const handleOptionSelect = (option) => {
    // For single choice, replace the entire selection
    if (question.type === 'single') {
      onAnswerChange([option]);
    }
  };
  
  return (
    <div className="question-card">
      <h3 className="question-text">{question.question}</h3>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <Option 
            key={index}
            option={option}
            isSelected={selectedOptions.includes(option)}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;