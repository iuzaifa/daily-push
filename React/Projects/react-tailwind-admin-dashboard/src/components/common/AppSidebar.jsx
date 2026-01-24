import { NavLink } from "react-router-dom";
import { sidebarData } from "../../utils/data";
import { Database } from "lucide-react";

const AppSidebar = ({collapsed}) => {
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
        <ul>
            <li className="flex bg-slate-100 px-2 py-1 rounded-sm">
                <span><Database/></span>
                <NavLink to={`/`}>{!collapsed && "lorem"}</NavLink>
            </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
