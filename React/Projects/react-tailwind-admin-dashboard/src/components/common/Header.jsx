import React from 'react'
import { TextAlignStart } from "lucide-react";
import ThemeMode from '../ui/ThemeMode';
import Notification from '../ui/Notification';
import User from "../User"
import SearchBar from '../ui/SearchBar';

const Header = ({onClick, collapsed }) => {
  return (
    <>
      <div
        className={`border-b border-slate-200 p-4 h-16 fixed flex justify-between items-center bg-white z-50
          ${collapsed ? "left-16 w-[calc(100%-4rem)]" : "left-64 w-[calc(100%-16rem)]"}
          `}
      >
        <div className="flex items-center gap-4">
          <button onClick={onClick} className="text-slate-800 p-2.5 cursor-pointer hover:rounded-full hover:bg-slate-100">
            <TextAlignStart size={18} />
          </button>
          <h3 className="text-xl font-bold text-slate-800 uppercase">
            Dashboard
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <SearchBar />
          <ThemeMode />
          <Notification />
          <User />
        </div>
      </div>
    </>
  );
};

export default Header