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

const router = createBrowserRouter([
  {
    element: <WebsiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/features", element: <Features /> },
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
    ],
  },
]);

export default router;
