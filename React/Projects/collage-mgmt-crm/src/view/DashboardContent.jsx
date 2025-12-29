import React from 'react';
import {
  School,
  People,
  Book,
  AttachMoney,
  Settings,
  TrendingUp,
  Assignment,
  Person
} from '@mui/icons-material';

const Dashboard = () => {
  const statsData = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12% from last month",
      icon: <School fontSize="large" className="text-blue-400" />,
      bgColor: "text-blue-400"
    },
    {
      title: "Total Teachers", 
      value: "187",
      change: "+3% from last month",
      icon: <People fontSize="large" className="text-green-400" />,
      bgColor: "text-green-400"
    },
    {
      title: "Active Courses",
      value: "45", 
      change: "8 new this semester",
      icon: <Book fontSize="large" className="text-purple-400" />,
      bgColor: "text-purple-400"
    },
    {
      title: "Revenue",
      value: "$847K",
      change: "+18% from last month", 
      icon: <AttachMoney fontSize="large" className="text-yellow-400" />,
      bgColor: "text-yellow-400"
    }
  ];

  const recentActivities = [
    { action: "New student enrollment", user: "John Smith", time: "2 hours ago" },
    { action: "Teacher schedule updated", user: "Prof. Davis", time: "4 hours ago" },
    { action: "Course material uploaded", user: "Dr. Wilson", time: "6 hours ago" },
    { action: "Fee payment received", user: "Sarah Johnson", time: "8 hours ago" },
  ];

  const quickActions = [
    { label: "Add Student", icon: <School fontSize="medium" />, color: "bg-blue-600" },
    { label: "Add Teacher", icon: <People fontSize="medium" />, color: "bg-green-600" },
    { label: "Create Course", icon: <Book fontSize="medium" />, color: "bg-purple-600" },
    { label: "Generate Report", icon: <Assignment fontSize="medium" />, color: "bg-yellow-600" },
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">Welcome back, Admin!</h2>
          <p className="text-gray-400">Here's what's happening at your college today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.bgColor}`}>{stat.value}</p>
                </div>
                {stat.icon}
              </div>
              <p className="text-green-400 text-sm mt-2">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Recent Activities and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center justify-center p-4 hover:bg-gray-700 rounded-lg transition-colors border border-gray-600"
                >
                  <div className={`${action.color} p-3 rounded-lg mb-2`}>
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium text-white">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Dashboard Content */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Events */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Upcoming Events</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-white">Semester Exams</p>
                  <p className="text-xs text-gray-400">March 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-white">Faculty Meeting</p>
                  <p className="text-xs text-gray-400">March 10, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-white">Sports Day</p>
                  <p className="text-xs text-gray-400">March 20, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Performance Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Student Attendance</span>
                  <span className="text-sm text-white">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Course Completion</span>
                  <span className="text-sm text-white">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Fee Collection</span>
                  <span className="text-sm text-white">78%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Recent Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-red-900/20 rounded-lg">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-white">System Maintenance</p>
                  <p className="text-xs text-gray-400">Scheduled for tonight at 2 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-yellow-900/20 rounded-lg">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-white">Fee Reminder</p>
                  <p className="text-xs text-gray-400">45 students pending payment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-green-900/20 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-white">New Registration</p>
                  <p className="text-xs text-gray-400">12 new students registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;