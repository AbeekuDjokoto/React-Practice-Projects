import { createBrowserRouter } from "react-router-dom";

import Login from "../features/Auth/Pages/Login/Login";

import AuthLayouts from "../layouts/authLayouts/AuthLayouts";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import DynamicImage from "../features/Dashboard/Pages/DynamicImage";
import Auth from "../features/Dashboard/Pages/Auth";
import Products from "../features/Dashboard/Pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayouts />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DynamicImage /> },
      { path: "auth", element: <Auth /> },
      { path: "products", element: <Products /> },
    ],
  },
]);
