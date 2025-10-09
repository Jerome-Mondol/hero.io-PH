import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Toaster } from 'sonner';
import router from "./router/router";

const App = () => {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
      <Toaster position="top-center" />
    </>
  )
};

export default App;
