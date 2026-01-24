import React, { useState } from 'react'
import Sidebar from '../components/common/Sidebar'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="h-screen flex bg-slate-100/70">
        <Sidebar onClick={() => setCollapsed(prev => !prev)} collapsed={collapsed} />
        <div className="flex-1">
          <Header onClick={() => setCollapsed(prev => !prev)} collapsed={collapsed} />

          <main className="mt-16 p-2">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout