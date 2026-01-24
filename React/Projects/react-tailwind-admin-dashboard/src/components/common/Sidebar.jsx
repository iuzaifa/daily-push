import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LayoutDashboard, ChevronRight, CastIcon, AppWindowIcon, ChevronDown } from "lucide-react";



const Sidebar = ( {collapsed, onClick}) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);




  return (
    <>
      <aside className={`h-screen bg-white border-r border-slate-200 flex flex-col ${collapsed ? "w-16" : "w-64"}`}>
        {/* Logo  */}
        <div className={`h-16 border-b border-slate-200 flex items-center ${collapsed ? "justify-center p-4" : "px-6 p-4"}`}>
          <Link to={"/"}>
            <img className={`h-8 transition-all duration-300`} src={collapsed ? "sm-logo.png" : "logo.svg"} alt="" />
          </Link>
        </div>
            {/* <img className={`h-8`} src="sm-logo.png" alt="" /> */}

        {/* MENU */}
        <nav className='p-4 siderbar-nav'>
          <p className='text-[10px] font-semibold mb-2 text-slate-400'>{collapsed ? "..." : "Navigation"}</p>
          <ul>
            <li>
               

               {collapsed ? (
                 <>
                 <Link  onClick={onClick} to={"/"} className='text-sm text-gray-800 font-medium flex items-center justify-between p-2 hover:bg-slate-200/50 hover:text-slate-800 rounded-md'><div className='flex  items-center gap-2.5'> {collapsed ? (<LayoutDashboard size={15}/>) : (<><LayoutDashboard size={15}/> Dashboard</>)}   </div> {openSubmenu ? (<ChevronRight size={15}/>) : (<ChevronDown size={15}/>) }</Link>
                  {openSubmenu && (
                    <ul className='ml-5 mt-1 hidden'>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>CRM</Link></li>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>Analytics</Link></li>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>Reports</Link></li>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>Leads</Link></li>
                    </ul>
                  )}
                 </>
               ) : (<>
                <Link  onClick={() => setOpenSubmenu(prev => !prev)} to={"/"} className='text-sm text-gray-800 font-medium flex items-center justify-between p-2 hover:bg-slate-200/50 hover:text-slate-800 rounded-md'><div className='flex  items-center gap-2.5'> {collapsed ? (<LayoutDashboard size={15}/>) : (<><LayoutDashboard size={15}/> Dashboard</>)}   </div> {openSubmenu ? (<ChevronRight size={15}/>) : (<ChevronDown size={15}/>) }</Link>
                  {openSubmenu && (
                    <ul className='ml-5 mt-1'>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>CRM</Link></li>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>Analytics</Link></li>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>Reports</Link></li>
                      <li className='px-3 py-1.5 text-xs text-slate-800/90  font-semibold hover:bg-slate-200/50 rounded-sm'><Link to={"/"}>Leads</Link></li>
                    </ul>
                  )}
               
               </>)}
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar

