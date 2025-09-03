import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashbord from "./components/Dashbord/Dashbord";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Statistics from "./components/Statistics/Statistics";
import GadgetsCards from "./components/GadgetsCards/GadgetsCards";
import CartsLists from "./components/CartsLists/CartsLists";
import WishList from "./components/WishList/WishList";

import { CartContext } from "./context/CartContext";
import { getStoredCartList, getStoredHartList } from "./utilites/utilites";
import ErrorData from "./components/ErrorData/ErrorData";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categoriesData.json"),
        children: [
          {
            path: "/",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgetsData.json"),
            
          },
          {
            path: "/category/:category",
            element: <GadgetsCards></GadgetsCards>,
            errorElement: <ErrorData></ErrorData>,
            loader: () => fetch("../gadgetsData.json"),
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashbord></Dashbord>,
        children: [
          {
            index: "dashboard",
            element: <CartsLists></CartsLists>,
            loader: () => fetch("../gadgetsData.json"),
          },
          {
            path: "carts",
            element: <CartsLists></CartsLists>,
            loader: () => fetch("../gadgetsData.json"),
          },
          {
            path: "wish",
            element: <WishList></WishList>,
            loader: () => fetch("../gadgetsData.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "gadgets/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/gadgetsData.json"),
      },
    ],
  },
]);
const MainApp = () => {
  const [cartList, setCartList] = useState([]);
  const [hartList, setHartList] = useState([]);
  

  useEffect(() => {
    const stored = getStoredCartList();
    setCartList(Array.isArray(stored) ? stored : []);
  }, []);
  useEffect(() => {
    const stored = getStoredHartList();
    setHartList(Array.isArray(stored) ? stored : []);
  }, []);
  

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, hartList, setHartList}}
    >
      
      <RouterProvider router={router} />
      <ToastContainer />
    </CartContext.Provider>
  );
};


createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <MainApp />
  </StrictMode>
);
