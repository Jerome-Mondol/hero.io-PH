import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Apps from "../pages/Apps";
import AppDetailsCard from "../components/AppDetailsCard";
import Installed from "../pages/Installed";
import PageError from "../pages/PageError";

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
        element: <Installed />,
      },
      
      {
        path: "*",
        element: <PageError />
      }     
    ],
  },
]);

export default router
