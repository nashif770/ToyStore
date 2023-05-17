import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Components/Login&Registration/Login';
import Register from '../Components/Login&Registration/Register';
import Home from '../Components/Home/Home';
import Orders from '../Components/Orders/Orders';

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
            element:<Orders></Orders>
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