import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Dashbord from './components/Dashbord/Dashbord';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "dashboard",
        element: <Dashbord></Dashbord>
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadgetsData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
