// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/navbar/Navbar';
import DashboardContent from './view/DashboardContent';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [activePage, setActivePage] = useState('dashboard');

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
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeDropdowns={activeDropdowns}
        toggleDropdown={toggleDropdown}
        activePage={activePage}
        handleSubmenuClick={handleSubmenuClick}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default App;