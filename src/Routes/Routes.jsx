import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Login&Registration/Login";
import Register from "../Components/Login&Registration/Register";
import Home from "../Components/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Components/Blogs/Blogs";
import FeaturedProducts from "../Components/Home/FeaturedProducts/FeaturedProducts";
import MyToys from "../Components/MyToys/MyToys";
import ToyDetail from "../Components/ToyDetail/ToyDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/toydetail/:id",
        element: (
          <PrivateRoutes>
            <ToyDetail></ToyDetail>
          </PrivateRoutes>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/toydetail/${params.id}`)
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
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
