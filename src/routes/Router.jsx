import MainLayout from "@/layouts/Main-Layout/MainLayout";
import Home from "@/pages/Home/Home";
import ServiceDetails from "@/pages/service-details/ServiceDetails";
import { createBrowserRouter } from "react-router-dom";
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
        element: <ServiceDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const found = data.find((d) => d.id === params.id);
          return { found, data };
        },
      },
    ],
  },
]);
