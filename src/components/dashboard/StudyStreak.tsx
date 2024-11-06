import React from 'react';

const days = Array.from({ length: 35 }, (_, i) => ({
  date: new Date(Date.now() - (34 - i) * 24 * 60 * 60 * 1000),
  studied: Math.random() > 0.3,
}));

export default function StudyStreak() {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, i) => (
        <div
          key={i}
          className={`aspect-square rounded-sm ${
            day.studied ? 'bg-blue-600' : 'bg-gray-100'
          }`}
          title={day.date.toLocaleDateString()}
        />
      ))}
    </div>
  );
}