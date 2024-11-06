import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizResultsProps {
  questions: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
  }>;
  answers: number[];
  score: number;
}

export default function QuizResults({ questions, answers, score }: QuizResultsProps) {
  const percentage = (score / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-6">Quiz Results</h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {score}/{questions.length}
                </div>
                <div className="text-gray-600">Questions Correct</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {percentage.toFixed(0)}%
                </div>
                <div className="text-gray-600">Score</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Review Answers
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Try Another Quiz
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Detailed Review</h3>
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6">
                  <div className="flex items-start mb-4">
                    {answers[index] === question.correctAnswer ? (
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">
                        {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-100 border border-green-500'
                                : optionIndex === answers[index]
                                ? 'bg-red-100 border border-red-500'
                                : 'bg-gray-50'
                            }`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}