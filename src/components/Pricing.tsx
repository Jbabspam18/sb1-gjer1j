import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Trial',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      'Access to 100+ practice questions',
      'Basic performance tracking',
      'Limited mock exams',
      '24/7 community access'
    ]
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Most popular for serious students',
    features: [
      'Unlimited practice questions',
      'Advanced analytics dashboard',
      'Unlimited mock exams',
      'Priority support',
      'Progress tracking',
      'Custom study plans'
    ]
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'For flight schools and institutions',
    features: [
      'Everything in Pro plan',
      'Bulk user management',
      'Custom question banks',
      'API access',
      'Dedicated account manager',
      'Custom reporting'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your journey to becoming a certified pilot
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                index === 1
                  ? 'bg-white border-2 border-blue-600 shadow-xl'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {index === 1 && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-gray-600 text-2xl">$</span>
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {index === 0 ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}