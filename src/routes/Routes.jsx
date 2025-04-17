
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import OurMenu from "../pages/OurMenu/OurMenu";
import Shop from './../pages/Shop/Shop';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <div>error</div>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "contact",
            element: <ContactUs></ContactUs>
        },
        {
            path: "dashboard",
            element: <Dashboard/>
        },
        {
            path: "our-menu",
            element: <OurMenu></OurMenu>
        },
        {
            path: "our-shop/:category",
            element: <Shop></Shop>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        }
      ]
    },
  ]);

