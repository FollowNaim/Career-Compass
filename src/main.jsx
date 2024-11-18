import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ScrollToTop from "./components/toTop/ScrollToTop";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { routes } from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);
