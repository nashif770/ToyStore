import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Login&Registration/Login";
import Register from "../Components/Login&Registration/Register";
import Home from "../Components/Home/Home";
import Orders from "../Components/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Components/Blogs/Blogs";
import FeaturedProducts from "../Components/Home/FeaturedProducts/FeaturedProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <FeaturedProducts></FeaturedProducts>,
            loader: () => fetch("http://localhost:5000/toys"),
          },
        ],
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
