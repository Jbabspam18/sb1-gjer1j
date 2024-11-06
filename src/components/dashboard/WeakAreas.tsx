import React from 'react';
import { AlertTriangle } from 'lucide-react';

const weakAreas = [
  {
    topic: 'Weather Systems',
    accuracy: 65,
    questions: 45,
  },
  {
    topic: 'Navigation Principles',
    accuracy: 70,
    questions: 32,
  },
  {
    topic: 'Aircraft Systems',
    accuracy: 72,
    questions: 28,
  },
];

export default function WeakAreas() {
  return (
    <div className="space-y-4">
      {weakAreas.map((area, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{area.topic}</h3>
              <p className="text-sm text-gray-500">{area.questions} questions</p>
            </div>
            <span className="text-red-600 font-semibold">{area.accuracy}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-600 rounded-full h-2"
              style={{ width: `${area.accuracy}%` }}
            />
          </div>
        </div>
      ))}
      <button className="w-full py-3 text-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
        Practice Weak Areas
      </button>
    </div>
  );
}