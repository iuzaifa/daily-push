import React from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";



const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />

          <main className="p-6">
            <Outlet /> {/* Pages render here */}
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout