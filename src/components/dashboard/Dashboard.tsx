import React from 'react';
import { BarChart3, Calendar, Clock, BookOpen, AlertTriangle, Trophy, ArrowUpRight } from 'lucide-react';
import ProgressChart from './ProgressChart';
import WeakAreas from './WeakAreas';
import StudyStreak from './StudyStreak';
import RecentActivity from './RecentActivity';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Study Hours</p>
                <p className="text-2xl font-bold text-gray-900">24.5</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Questions Answered</p>
                <p className="text-2xl font-bold text-gray-900">847</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">7 days</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Score</p>
                <p className="text-2xl font-bold text-gray-900">82%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Performance Overview</h2>
                <select className="border rounded-lg px-3 py-2 text-sm text-gray-600">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              <ProgressChart />
            </div>
          </div>

          {/* Weak Areas */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Areas to Improve</h2>
                <button className="text-blue-600 hover:text-blue-700">View All</button>
              </div>
              <WeakAreas />
            </div>
          </div>

          {/* Study Streak */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Study Streak</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <StudyStreak />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <button className="text-blue-600 hover:text-blue-700">View All</button>
              </div>
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}