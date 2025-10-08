import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Apps from "../pages/Apps";
import AppDetailsCard from "../components/AppDetailsCard";

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
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

export default router
