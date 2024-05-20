import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import "react-toastify/dist/ReactToastify.css";
import MyToastProvider from "./helpers/MyToastProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <MyToastProvider />
      </HelmetProvider>
    </ContextProvider>
  </React.StrictMode>
);
