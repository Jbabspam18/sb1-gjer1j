import React from 'react';
import { BookOpen, BarChart2, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Question Bank',
    description: 'Access thousands of carefully curated questions covering all exam topics and difficulty levels.'
  },
  {
    icon: BarChart2,
    title: 'Performance Analytics',
    description: 'Track your progress with detailed analytics and identify areas that need improvement.'
  },
  {
    icon: Clock,
    title: 'Timed Practice Tests',
    description: 'Simulate real exam conditions with timed tests and get instant feedback on your performance.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with fellow pilots, share experiences, and learn from the community.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and resources you need to prepare effectively for your pilot exam.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}