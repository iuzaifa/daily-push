import React, { useState } from 'react';
import {
  Dashboard,
  School,
  People,
  Person,
  Book,
  Assignment,
  AttachMoney,
  Settings,
  ExpandMore,
  ChevronRight,
  Menu,
  Close
} from '@mui/icons-material';

const Sidebar = ({ sidebarOpen, setSidebarOpen, activePage, setActivePage }) => {
  const [activeDropdowns, setActiveDropdowns] = useState({});

  const menuData = [
    {
      title: "Main",
      items: [
        {
          key: "dashboard",
          label: "Dashboard",
          icon: <Dashboard fontSize="small" />,
          submenu: [
            "Admin Dashboard",
            "Teacher Dashboard",
            "Student Dashboard",
            "Parent Dashboard",
          ],
          path: "/dashboard"
        },
      ],
    },
    {
      title: "Peoples",
      items: [
        {
          key: "student",
          label: "Students",
          icon: <School fontSize="small" />,
          submenu: [
            "All Students",
            "List Students",
            "Student Details",
            "Student Promotion",
          ],
          path: "/students"
        },
        {
          key: "teacher",
          label: "Teachers",
          icon: <People fontSize="small" />,
          submenu: [
            "All Teachers",
            "Teacher List",
            "Teacher Details",
            "Routine",
          ],
          path: "/teachers"
        },
        {
          key: "staff",
          label: "Staff",
          icon: <Person fontSize="small" />,
          submenu: [
            "All Staff",
            "Staff List",
            "Staff Details",
            "Attendance",
          ],
          path: "/staff"
        },
      ],
    },
    {
      title: "Academic",
      items: [
        {
          key: "courses",
          label: "Courses",
          icon: <Book fontSize="small" />,
          submenu: [
            "All Courses",
            "Course Details",
            "Syllabus",
            "Assignments",
          ],
          path: "/courses"
        },
        {
          key: "exams",
          label: "Examinations",
          icon: <Assignment fontSize="small" />,
          submenu: [
            "Exam Schedule",
            "Results",
            "Grade Reports",
            "Certificates",
          ],
          path: "/exams"
        },
      ],
    },
    {
      title: "Finance",
      items: [
        {
          key: "fees",
          label: "Fee Management",
          icon: <AttachMoney fontSize="small" />,
          submenu: [
            "Fee Collection",
            "Fee Structure",
            "Payment History",
            "Reports",
          ],
          path: "/fees"
        },
      ],
    },
    {
      title: "System",
      items: [
        {
          key: "settings",
          label: "Settings",
          icon: <Settings fontSize="small" />,
          submenu: [
            "General Settings",
            "User Management",
            "Backup",
            "Security",
          ],
          path: "/settings"
        },
      ],
    },
  ];

  const toggleDropdown = (key) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSubmenuClick = (parentKey, submenuItem, path) => {
    setActivePage(`${parentKey}-${submenuItem.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className={`${sidebarOpen ? 'w-72' : 'w-16'} transition-all duration-300 bg-gray-800 border-r border-gray-700 flex flex-col`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {sidebarOpen && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <School fontSize="small" className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">EduCRM</h2>
              <p className="text-xs text-gray-400">College Management</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
        >
          {sidebarOpen ? <Close fontSize="small" /> : <Menu fontSize="small" />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 overflow-y-auto py-4">
        {menuData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {sidebarOpen && (
              <h3 className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            
            {section.items.map((item) => (
              <div key={item.key} className="mb-1">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-700 transition-colors group text-white"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    {sidebarOpen && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </div>
                  {sidebarOpen && item.submenu && (
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {activeDropdowns[item.key] ? <ExpandMore fontSize="small" /> : <ChevronRight fontSize="small" />}
                    </span>
                  )}
                </button>
                
                {/* Submenu */}
                {sidebarOpen && activeDropdowns[item.key] && item.submenu && (
                  <div className="bg-gray-750 border-l-2 border-blue-600 ml-8">
                    {item.submenu.map((submenuItem, submenuIndex) => (
                      <button
                        key={submenuIndex}
                        onClick={() => handleSubmenuClick(item.key, submenuItem, item.path)}
                        className={`w-full text-left px-6 py-2 text-sm hover:bg-gray-600 transition-colors ${
                          activePage === `${item.key}-${submenuItem.toLowerCase().replace(/\s+/g, '-')}` 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-300'
                        }`}
                      >
                        {submenuItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;