import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../pages/crm/dashboard/Dashboard"

export const routes = createBrowserRouter([
  {
    path: "/", element: <DashboardLayout/>,
    children : [
        {index : true , element : <Dashboard/>}

    ]
  },

  {
    path: "*",
    element: (
      <>
        {" "}
        <div className="text-red-600 font-extrabold text-5xl text-center py-40">
          404 Not Found{" "}
        </div>
      </>
    ),
  },
]);
