import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

const ProfileMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center space-x-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-9 h-9 rounded-full border border-gray-300"
        />
        <span className="text-sm font-medium text-gray-700">Huzaifa</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 animate-fadeIn z-50">
          <a
            href="#profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <User className="h-4 w-4 mr-2 text-gray-500" /> Profile
          </a>
          <a
            href="#settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Settings className="h-4 w-4 mr-2 text-gray-500" /> Settings
          </a>
          <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
