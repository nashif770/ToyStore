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
import AllToys from "../Components/AllToys/AllToys";
import AddToy from "../Components/AddToy/AddToy";

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
        loader: ({params})=> fetch(`https://40k-action-figures-server-nashif770.vercel.app/toydetail/${params.id}`)
      },
      {
        path: "/sellertoys/:id",
        element: (
          <PrivateRoutes>
            <ToyDetail></ToyDetail>
          </PrivateRoutes>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/sellertoys/${params.id}`)
      },
      {
        path: "/alltoys",
        element: (
          <PrivateRoutes>
            <AllToys></AllToys>
          </PrivateRoutes>
        ),
        loader: ()=> fetch(`http://localhost:5000/sellertoys`)
        // loader: ()=> fetch(`https://40k-action-figures-server-nashif770.vercel.app/toys`)
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        )
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
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
