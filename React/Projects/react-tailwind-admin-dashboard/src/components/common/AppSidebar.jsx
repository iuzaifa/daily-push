import { NavLink, useNavigate } from "react-router-dom";
import { sidebarData } from "../../utils/data";
import { useState } from "react";
import { ChevronRight, LayoutDashboard } from "lucide-react";

const AppSidebar = ({collapsed}) => {

  const [open, setOpen] = useState(false);

  
  return (
    <aside className={`bg-white border-r border-slate-200 h-screen trss transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
        {/* AAP LOGO */}
      <div className={`app-logo h-16 border-b border-slate-200 mb-1 flex items-center justify-center`}>
        {collapsed ? (<span className="text-xl font-bold bg-black text-white px-3 py-1 rounded-md">H</span>)
            : (<><span className="text-xl font-bold bg-black text-white px-3 py-1">H</span> 
            <h2 className={`text-xl font-bold bg-blue-700 text-white px-3 py-1`}>HUZAIFA</h2>
            </>)}
      </div>



        {/* NAVBAR  */}
      <nav className="flex-1 px-4 space-y-2 overflow-auto">

        <ul className="">
          <li>
              <NavLink onClick={() => setOpen(!open)} to={`/`} className={`w-full flex items-center justify-between p-2 text-sm rounded-sm`}>
                <div className="flex items-center justify-between gap-3">
                  <LayoutDashboard size={15} /> 
                  {!collapsed && <span>Dashboard</span>}  
                </div>

                {!collapsed && <ChevronRight size={15}/>}
              </NavLink>

          </li>
        </ul>

                {open &&  (
                  <>
                    Childs
                  </>
                )}


       
       
      </nav>
    </aside>
  );
};

export default AppSidebar;
