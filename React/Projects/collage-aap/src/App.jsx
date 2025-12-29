import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Import all pages
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Student from './pages/Student';
import Course from './pages/Course';
import CourseOffering from './pages/CourseOffering';
import Section from './pages/Section';
import AttendanceRecord from './pages/AttendanceRecord';
import Exam from './pages/Exam';
import Grade from './pages/Grade';
import InvoicePayment from './pages/InvoicePayment';
import Room from './pages/Room';
import Timetable from './pages/Timetable';
import LibraryItem from './pages/LibraryItem';
import Header from './components/header/Header';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Education Management System</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
            </div>
          </div>
        </header> */}
        <Header/>



        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-6">
            <Routes>
              {/* Default redirect to dashboard */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* All page routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user" element={<User />} />
              <Route path="/student" element={<Student />} />
              <Route path="/course" element={<Course />} />
              <Route path="/course-offering" element={<CourseOffering />} />
              <Route path="/section" element={<Section />} />
              <Route path="/attendance-record" element={<AttendanceRecord />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/grade" element={<Grade />} />
              <Route path="/invoice-payment" element={<InvoicePayment />} />
              <Route path="/room" element={<Room />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/library-item" element={<LibraryItem />} />
              
              {/* 404 fallback */}
              <Route path="*" element={<div className="text-center py-12"><h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;