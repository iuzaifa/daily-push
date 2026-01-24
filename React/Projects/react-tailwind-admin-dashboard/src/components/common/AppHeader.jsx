import { Hamburger } from 'lucide-react'
import React from 'react'

const AppHeader = ({ onClick, collapsed }) => {
  return (
    <>
      <header className={`bg-white border-b border-slate-200 p-4 h-16 flex items-center fixed z-50 w-full transition-all duration-300
        ${collapsed ? "left-16 w-[calc(100%-4rem)]" : "left-64 w-[calc(100%-16rem)]"}`}>
        <button onClick={onClick}>
          <Hamburger />
        </button>
      </header>
    </>
  );
};

export default AppHeader