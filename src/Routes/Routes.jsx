import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Components/Login&Registration/Login';
import Register from '../Components/Login&Registration/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<h1>Layout has been set</h1>
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