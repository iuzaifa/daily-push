import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Education Management System dashboard.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-3xl font-bold">1,247</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold">Active Courses</h3>
          <p className="text-3xl font-bold">89</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold">Total Faculty</h3>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold">Pending Exams</h3>
          <p className="text-3xl font-bold">23</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;