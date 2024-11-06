import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizProgress from './QuizProgress';
import QuizTimer from './QuizTimer';
import QuizResults from './QuizResults';

// Sample questions (in production, these would come from an API)
const sampleQuestions = [
  {
    id: 1,
    question: 'What is the primary purpose of the magnetic compass in an aircraft?',
    options: [
      'To indicate the aircraft\'s direction relative to magnetic north',
      'To measure altitude',
      'To indicate airspeed',
      'To measure vertical speed'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which of the following weather conditions is most likely to cause aircraft icing?',
    options: [
      'High temperature and low humidity',
      'Visible moisture and temperature near freezing',
      'Clear skies and high pressure',
      'Strong winds and clear visibility'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'What is the purpose of an aircraft\'s trim system?',
    options: [
      'To increase engine power',
      'To reduce drag',
      'To maintain the desired flight attitude without constant control pressure',
      'To increase lift during takeoff'
    ],
    correctAnswer: 2
  }
];

export default function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds

  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    setQuizComplete(true);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === sampleQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (quizComplete) {
    return (
      <QuizResults 
        questions={sampleQuestions}
        answers={answers}
        score={calculateScore()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <QuizProgress 
                current={currentQuestion + 1} 
                total={sampleQuestions.length} 
              />
              <QuizTimer 
                timeRemaining={timeRemaining} 
                setTimeRemaining={setTimeRemaining}
                onTimeUp={handleSubmit}
              />
            </div>
          </div>

          <QuizQuestion
            question={sampleQuestions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
          />

          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              {currentQuestion === sampleQuestions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  disabled={answers[currentQuestion] === undefined}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}