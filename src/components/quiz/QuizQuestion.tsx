import React from 'react';

interface QuizQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
  };
  selectedAnswer?: number;
  onAnswer: (option: number) => void;
}

export default function QuizQuestion({ question, selectedAnswer, onAnswer }: QuizQuestionProps) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              selectedAnswer === index
                ? 'bg-blue-100 border-2 border-blue-600'
                : 'border-2 border-gray-200 hover:border-blue-400'
            }`}
          >
            <span className="inline-block w-6 h-6 rounded-full text-center text-sm mr-3
              ${selectedAnswer === index ? 'bg-blue-600 text-white' : 'bg-gray-200'}">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}