import SignIn from "@/authentication/Signin";
import SignUp from "@/authentication/SignUp";
import MainLayout from "@/layouts/Main-Layout/MainLayout";
import Home from "@/pages/Home/Home";
import ServiceDetails from "@/pages/service-details/ServiceDetails";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const found = data.find((d) => d.id === params.id);
          return { found, data };
        },
      },
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);
