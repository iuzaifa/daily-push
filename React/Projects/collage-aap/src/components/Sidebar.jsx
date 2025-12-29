import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
  Home,
  User,
  Users,
  BookOpen,
  GraduationCap,
  FileText,
  Calendar,
  Award,
  CreditCard,
  MapPin,
  Clock,
  Library,
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'User', path: '/user', icon: User },
    { name: 'Student', path: '/student', icon: Users },
    { name: 'Course', path: '/course', icon: BookOpen },
    { name: 'Course Offering', path: '/course-offering', icon: GraduationCap },
    { name: 'Section', path: '/section', icon: FileText },
    { name: 'Attendance Record', path: '/attendance-record', icon: Calendar },
    { name: 'Exam', path: '/exam', icon: Award },
    { name: 'Grade', path: '/grade', icon: FileText },
    { name: 'Invoice/Payment', path: '/invoice-payment', icon: CreditCard },
    { name: 'Room', path: '/room', icon: MapPin },
    { name: 'Timetable', path: '/timetable', icon: Clock },
    { name: 'Library Item', path: '/library-item', icon: Library },
  ];

  return (
    <div className="w-64 bg-gray-900 flex flex-col">
      {/* Logo Section */}
      <div className="p-2 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">EduSystem</h1>
            <p className="text-xs text-gray-400">Management Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      {/* <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
        <div className="space-y-1 px-3">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`sidebar-item ${
                  isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'
                }`}
              >
                <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav> */}

      <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
        <div className="space-y-1 px-3">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded-sm flex items-center px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-gray-800 text-white rounded-sm"     
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>


      {/* Account Section */}
      <div className="p-1 border-t border-gray-700 flex-shrink-0">
        <div className="d-flex flex">
          <button className="w-full flex items-center px-2 py-1 text-sm text-gray-300 rounded-sm hover:bg-gray-800 hover:text-white transition-colors">
            <Settings className="h-4 w-4 mr-3" />
            Settings
          </button>
          <button className="w-full flex items-center px-2 py-1 text-sm text-gray-300 rounded-sm hover:bg-gray-800 hover:text-white transition-colors">
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;