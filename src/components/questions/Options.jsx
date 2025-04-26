import React from "react";

function Option({ option, isSelected, onSelect }) {
    return (
      <div 
        className={`option ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(option)}
      >
        <div className="option-indicator">
          {isSelected ? '✓' : ''}
        </div>
        <div className="option-text">{option}</div>
      </div>
    );
  }
  
  export default Option;