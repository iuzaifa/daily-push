import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/common/AppHeader'
import AppSidebar from '../components/common/AppSidebar'

const Layout = () => {

  const [collapsed, setCollapsed] = useState(false);

  

  return (
    <>
      <div className="h-screen flex bg-slate-100/70">
        <AppSidebar collapsed={collapsed} />
        <div className="flex-1">
          <AppHeader collapsed={collapsed} onClick={() => setCollapsed(prev => !prev)} />
          <main className="mt-16 p-1.5">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout