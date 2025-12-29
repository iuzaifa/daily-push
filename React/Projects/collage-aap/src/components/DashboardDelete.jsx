import React, { useState } from 'react';
import { 
  Search, 
  User, 
  Settings, 
  LogOut, 
  Home,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  Award,
  CreditCard,
  MapPin,
  Clock,
  Library,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download
} from 'lucide-react';

// Dashboard Page Component
const DashboardPage = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2">
        <Plus className="h-4 w-4" />
        <span>Quick Action</span>
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-3xl font-bold">1,247</p>
            <p className="text-blue-100 text-sm">+12% from last month</p>
          </div>
          <Users className="h-8 w-8 text-blue-200" />
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Active Courses</h3>
            <p className="text-3xl font-bold">89</p>
            <p className="text-green-100 text-sm">+5% from last month</p>
          </div>
          <BookOpen className="h-8 w-8 text-green-200" />
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total Faculty</h3>
            <p className="text-3xl font-bold">156</p>
            <p className="text-purple-100 text-sm">+8% from last month</p>
          </div>
          <GraduationCap className="h-8 w-8 text-purple-200" />
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Pending Exams</h3>
            <p className="text-3xl font-bold">23</p>
            <p className="text-orange-100 text-sm">Due this week</p>
          </div>
          <Award className="h-8 w-8 text-orange-200" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-blue-500" />
          Recent Activities
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="font-medium">New student registration</p>
              <p className="text-sm text-gray-600">John Doe enrolled in Computer Science</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="font-medium">Course updated</p>
              <p className="text-sm text-gray-600">Advanced Mathematics curriculum revised</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="font-medium">Payment received</p>
              <p className="text-sm text-gray-600">Invoice #12345 - $2,500</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-green-500" />
          Upcoming Events
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-medium">Final Exinations</p>
            <p className="text-sm text-gray-600">Mathematics Department</p>
            <p className="text-xs text-gray-500">Tomorrow, 9:00 AM</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-medium">Faculty Meeting</p>
            <p className="text-sm text-gray-600">Monthly review session</p>
            <p className="text-xs text-gray-500">Friday, 2:00 PM</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="font-medium">New Student Orientation</p>
            <p className="text-sm text-gray-600">Welcome session for freshers</p>
            <p className="text-xs text-gray-500">Next Monday, 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// User Management Page Component
const UserPage = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
      <div className="flex space-x-3">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add User</span>
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
        <p className="text-2xl font-bold text-gray-900">348</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
        <p className="text-2xl font-bold text-green-600">312</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Administrators</h3>
        <p className="text-2xl font-bold text-blue-600">12</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Teachers</h3>
        <p className="text-2xl font-bold text-purple-600">156</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">All Users</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">JS</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">John Smith</div>
                    <div className="text-sm text-gray-500">john.smith@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                  Administrator
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">JD</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Jane Doe</div>
                    <div className="text-sm text-gray-500">jane.doe@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  Teacher
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day ago</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">MB</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Mike Brown</div>
                    <div className="text-sm text-gray-500">mike.brown@example.com</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Staff
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Inactive
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 week ago</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Generic Page Component for other menu items
const GenericPage = ({ title }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2">
        <Plus className="h-4 w-4" />
        <span>Add New</span>
      </button>
    </div>
    
    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
      <div className="mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-blue-500" />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {title} Management
      </h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        This is the {title.toLowerCase()} management page. Here you can manage all {title.toLowerCase()}-related operations and data.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800">Create</h3>
          <p className="text-sm text-gray-600">Add new {title.toLowerCase()} records</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800">Manage</h3>
          <p className="text-sm text-gray-600">Edit existing {title.toLowerCase()} data</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800">Reports</h3>
          <p className="text-sm text-gray-600">Generate {title.toLowerCase()} reports</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'User', icon: User },
    { name: 'Student', icon: Users },
    { name: 'Course', icon: BookOpen },
    { name: 'Course Offering', icon: GraduationCap },
    { name: 'Section', icon: FileText },
    { name: 'Attendance Record', icon: Calendar },
    { name: 'Exam', icon: Award },
    { name: 'Grade', icon: FileText },
    { name: 'Invoice/Payment', icon: CreditCard },
    { name: 'Room', icon: MapPin },
    { name: 'Timetable', icon: Clock },
    { name: 'Library Item', icon: Library }
  ];

  const renderPageContent = () => {
    switch(selectedItem) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'User':
        return <UserPage />;
      default:
        return <GenericPage title={selectedItem} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar - Fixed with hidden scroll */}
      <div className="w-64 bg-gray-900 flex flex-col">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700 flex-shrink-0">
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

        {/* Navigation Menu - Scrollable with hidden scrollbar */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;  /* Internet Explorer 10+ */
              scrollbar-width: none;  /* Firefox */
            }
            .scrollbar-hide::-webkit-scrollbar { 
              display: none;  /* Safari and Chrome */
            }
          `}</style>
          <div className="space-y-1 px-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setSelectedItem(item.name)}
                  className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    selectedItem === item.name
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:transform hover:scale-102'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Account Section */}
        <div className="p-4 border-t border-gray-700 flex-shrink-0">
          <div className="relative">
            <button
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="w-full flex items-center px-3 py-3 text-sm font-medium text-gray-300 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold text-sm">JA</span>
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium truncate">John Admin</p>
                <p className="text-xs text-gray-400 truncate">Administrator</p>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ${showAccountMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Account Dropdown */}
            {showAccountMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden">
                <div className="py-2">
                  <button className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150">
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </button>
                  <button className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150">
                    <LogOut className="h-4 w-4 mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              />
            </div>

            {/* Header Right Section */}
            <div className="ml-6 flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome back, <span className="font-semibold text-gray-800">John</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <button className="p-2 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-6">
            {renderPageContent()}
          </div>
        </main>
      </div>
    </div>
  );
}