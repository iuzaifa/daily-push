import { MoonIcon } from 'lucide-react';
import React from 'react'

const ThemeMode = () => {
  return (
    <>
      <button className="text-slate-600 hover:bg-slate-100 text-center p-2.5 rounded-full ">
        <MoonIcon size={18} className='stroke-2'/>

      </button>
    </>
  );
}

export default ThemeMode