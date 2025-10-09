import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Apps from "../pages/Apps";
import AppDetailsCard from "../components/AppDetailsCard";
import InstalledApps from "../section/InstalledApps/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'apps',
        element: <Apps />,
      
      },
      {
        path: 'apps/:id',
        element: <AppDetailsCard />,
      },
      {
        path: 'installed',
        element: <InstalledApps />,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

export default router
