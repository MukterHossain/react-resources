import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Dashboard from "../pages/allDashboards/dashboard/Dashboard";
import Education from "../pages/allDashboards/education/Education";
import Hotel from "../pages/allDashboards/hotel/Hotel";
import CoffeeShop from "../pages/allDashboards/coffeeShop/CoffeeShop";
import Transport from "../pages/allDashboards/transport/Transport";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "education",
            element: <Education></Education>,
          },
          {
            path: "hotel",
            element: <Hotel></Hotel>,
          },
          {
            path: "coffee",
            element: <CoffeeShop></CoffeeShop>,
          },
          {
            path: "transport",
            element: <Transport></Transport>,
          },
        ],
      },
    ],
  },
]);
