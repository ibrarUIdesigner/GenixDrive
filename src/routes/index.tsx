import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/website/Home";
import About from "../pages/website/About";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Pricing from "../pages/website/Pricing";
import Blogs from "../pages/website/Blogs";
import BlogDetails from "../pages/website/BlogDetails";
import Features from "../pages/website/Features";
import AdminAuthLayout from "../layouts/AdminAuthLayout";
import AdminLogin from "../pages/admin/Login";
import AdminSignup from "../pages/admin/Signup";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminMyTrips from "../pages/admin/MyTrips";
import AdminAppLayout from "../layouts/AdminAppLayout";
import AdminSettings from "../pages/admin/Settings";
import Features1 from "../pages/website/Features1";
import Features2 from "../pages/website/Features2";
import Feature3 from "../pages/website/Feature3";
import Demo from "../pages/website/Demo";
import DrivingScore from "../pages/admin/DrivingScore";
import SubscriptionsManagements from "../pages/admin/SubscriptionsManagements";

const router = createBrowserRouter([
  {
    element: <WebsiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/demo", element: <Demo /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/features", element: <Features /> },
      { path: "/features1", element: <Features1 /> },
      { path: "/features2", element: <Features2 /> },
      { path: "/features3", element: <Feature3 /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminAuthLayout />,
    children: [
      { path: "login", element: <AdminLogin /> },
      { path: "signup", element: <AdminSignup /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminAppLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "my-trips", element: <AdminMyTrips /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "driving-score", element: <DrivingScore /> },
      { path: "subscriptions", element: <SubscriptionsManagements /> },
    ],
  },
]);

export default router;
