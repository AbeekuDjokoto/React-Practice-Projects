import { createBrowserRouter } from "react-router-dom";

import Login from "../features/Auth/Pages/Login/Login";
import { LandingPage } from "../features";
import AuthLayouts from "../layouts/authLayouts/AuthLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayouts />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
]);
