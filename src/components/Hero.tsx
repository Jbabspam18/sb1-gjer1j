import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Your Pilot Exam with Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive preparation platform designed by experienced pilots and instructors.
            Practice with real exam-style questions and boost your success rate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
              View Demo
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>2,000+ Practice Questions</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>Real Exam Simulations</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>Performance Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}