import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Components/Login&Registration/Login';
import Register from '../Components/Login&Registration/Register';
import Home from '../Components/Home/Home';
import Orders from '../Components/Orders/Orders';
import PrivateRoutes from './PrivateRoutes';
import Blogs from '../Components/Blogs/Blogs';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/orders',
            element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
        },
        {
            path: '/blogs',
            element:<PrivateRoutes><Blogs></Blogs></PrivateRoutes>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
      ]
    },
  ]);

export default router;