import Home from '@/pages/Home';
import Search from '@/pages/Search';
import GiphyList from '@/pages/GiphyList';

import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

export default createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/explore",
          element: <Search />,
        },
        {
          path: "/giphy",
          element: <GiphyList />,
        }
      ],
    },
  ]);