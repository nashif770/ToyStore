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
import UpdateMyToy from "../Components/MyToys/UpdateMyToy";
import Err from "../Components/Shared/Err";

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
        path: "toydetail/:id",
        element: (
          <PrivateRoutes>
            <ToyDetail></ToyDetail>
          </PrivateRoutes>
        ),
        loader: ({params})=> fetch(`https://40k-action-figures-server.vercel.app/toys/${params.id}`)
      },
      {
        path: "alltoys",
        element: (
          <PrivateRoutes>
            <AllToys></AllToys>
          </PrivateRoutes>
        ),
        loader: ()=> fetch(`https://40k-action-figures-server.vercel.app/toys`)
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        )
      },
      {
        path: "updateMyToy",
        element: (
          <PrivateRoutes>
            <UpdateMyToy></UpdateMyToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "updateMyToy/:id",
        element: (
          <PrivateRoutes>
            <UpdateMyToy></UpdateMyToy>
          </PrivateRoutes>
        ),
        loader: ({params})=> fetch(`https://40k-action-figures-server.vercel.app/updatetoy/${params.id}`)
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Err></Err>
  },
]);

export default router;
