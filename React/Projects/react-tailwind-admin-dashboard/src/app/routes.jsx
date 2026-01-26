import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/crm/dashboard/Dashboard"
import SalesReport from "../pages/crm/reports/SalesReport";

export const routes = createBrowserRouter([
  {
    path: "/", element: <Layout/>,
    children : [
        {index : true , element : <Dashboard/>},
        {path : "/reports/sales-reports" , element : <SalesReport/>}

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
