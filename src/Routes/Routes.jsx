import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<h1>Layout has been set</h1>
        }
      ]
    },
  ]);

export default router;