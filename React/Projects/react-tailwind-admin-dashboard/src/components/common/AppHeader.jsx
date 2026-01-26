import { Hamburger } from 'lucide-react'
import React from 'react'

const AppHeader = ({ onClick, collapsed }) => {
  return (
    <>
      <header
        className={`bg-white border-b border-slate-200 p-4 h-16 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 ${
          collapsed
            ? "left-16 w-[calc(100%-4rem)]"
            : "left-64 w-[calc(100%-16rem)]"
        }`}
      >
        <button
          onClick={onClick}
          className="hover:bg-slate-100 p-2 rounded-md transition-colors"
        >
          <Hamburger />
        </button>

        <div className="flex items-center gap-4">
          {/* Add your header content here - search, notifications, profile, etc. */}
          <span className="text-slate-600">Header Content</span>
        </div>
      </header>
    </>
  );
};

export default AppHeader