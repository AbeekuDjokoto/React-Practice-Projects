import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { LandingPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
]);
