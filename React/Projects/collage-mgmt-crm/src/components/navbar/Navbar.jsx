import React from 'react';
import {
  School,
  Search,
  Notifications,
  AccountCircle,
  NotificationImportant
} from '@mui/icons-material';

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <School fontSize="medium" className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">College Management System</h1>
              <p className="text-sm text-gray-400">Dashboard Overview</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Search 
              fontSize="small" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-sm text-white placeholder-gray-400"
            />
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <Notifications fontSize="small" className="text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          {/* Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-600">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <AccountCircle fontSize="small" className="text-white" />
            </div>
            <div className="hidden md:block">
              <p className="font-medium text-sm text-white">Admin User</p>
              <p className="text-xs text-gray-400">administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;