import React from 'react';
import { BookOpen, CheckCircle, Clock, Trophy } from 'lucide-react';

const activities = [
  {
    type: 'quiz',
    title: 'Completed Weather Systems Quiz',
    score: '85%',
    time: '2 hours ago',
    icon: BookOpen,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    type: 'achievement',
    title: 'Earned "Quick Learner" Badge',
    description: 'Completed 5 quizzes in one day',
    time: '5 hours ago',
    icon: Trophy,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    type: 'study',
    title: 'Study Session Completed',
    description: 'Aircraft Systems - 45 minutes',
    time: '8 hours ago',
    icon: Clock,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
];

export default function RecentActivity() {
  return (
    <div className="space-y-6">
      {activities.map((activity, index) => {
        const Icon = activity.icon;
        return (
          <div key={index} className="flex items-start space-x-4">
            <div className={`${activity.iconBg} p-2 rounded-lg`}>
              <Icon className={`h-5 w-5 ${activity.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                {activity.score && (
                  <span className="text-green-600 font-medium">{activity.score}</span>
                )}
              </div>
              {activity.description && (
                <p className="text-gray-500 text-sm">{activity.description}</p>
              )}
              <p className="text-gray-400 text-sm">{activity.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}