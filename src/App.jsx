import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
};

export default App;
