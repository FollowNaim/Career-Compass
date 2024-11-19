import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import DataProvider from "./provider/DataProvider";
import { routes } from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </DataProvider>
  </StrictMode>
);
