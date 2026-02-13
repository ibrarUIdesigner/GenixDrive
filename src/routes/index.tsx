import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/website/Home";
import About from "../pages/website/About";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Pricing from "../pages/website/Pricing";
import Blogs from "../pages/website/Blogs";
import BlogDetails from "../pages/website/BlogDetails";
import Features from "../pages/website/Features";

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
]);

export default router;
