import { NavLink, useNavigate } from "react-router-dom";
import { menu } from "../../utils/data";
import { useState } from "react";
import { ChevronRight, LayoutDashboard } from "lucide-react";

const AppSidebar = ({collapsed}) => {

  const [openMenu, setOpenMenu] = useState(null); // Changed to single value instead of object

  const toggleSubmenu = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id)); // Toggle off if same, otherwise set new menu
  };

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

        <ul className="overflow-x-hidden">
          {menu.map((data) => {
            const Icon = data.icon;
            const hasChildren = data.children && data.children.length > 0; 
            const isOpen = openMenu === data.id;

            return (
              <>
                <li key={data.id}>
                    {hasChildren ? (
                      <button onClick={() => toggleSubmenu(data.id)} className={`w-full flex items-center justify-between p-2 text-sm rounded-sm`}>
                        <div className="flex items-center justify-between gap-3">
                          <Icon size={15} />
                          {!collapsed && <span>{data.title}</span>}
                        </div>

                        {!collapsed && <ChevronRight size={15}/>}
                      </button>

                    ):(
                        <NavLink to={data.href} className={({isActive}) => `${isActive ? "bg-red-200" : ""} w-full flex items-center justify-between p-2 text-sm rounded-sm`}>
                          <div className="flex items-center justify-between gap-3">
                            <Icon size={15} />
                            {!collapsed && <span>{data.title}</span>}
                          </div>
                        </NavLink>
                      )}


                      {/* Submenue Iteams */}
                      {hasChildren && isOpen && !collapsed && (
                        <ul className="ml-4 mt-1 space-y-1">

                          {data.children.map((child) => {
                            const ChildIcone = child.icon;

                            return (
                              <li key={child.id}>
                                <NavLink to={child.href} className={({isActive})  => `${isActive ? "bg-gray-100" : "hover:bg-slate-100"} flex items-center gap-2.5 text-sm p-2 rounded-sm w-full transition-colors`}>

                                {ChildIcone && <ChildIcone size={5} />}
                                <span>{child.title}</span>
                                </NavLink>



                              </li>
                            )
                          })}


                        </ul>
                      ) }
                      

                    
                </li>

              </>
            )
          })}

        </ul>

        

      </nav>
    </aside>
  );
};

export default AppSidebar;