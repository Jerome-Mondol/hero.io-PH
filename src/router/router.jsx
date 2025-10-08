import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"

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
        element: <h1>Hello</h1>
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

export default router
