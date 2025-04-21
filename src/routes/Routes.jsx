
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import OurMenu from "../pages/OurMenu/OurMenu";
import Shop from './../pages/Shop/Shop';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlan from "../pages/Dashboard/AddPlan";
import UserHome from "../pages/Dashboard/UserHome";
import Payment from "../pages/Dashboard/Payment";


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
    {
        path: "/dashboard",
        element: <PrivetRoutes><DashboardLayout/></PrivetRoutes>,
        errorElement: <div>error</div>,
        children: [
            {
                path: "user",
                element: <UserHome></UserHome>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "user-home",
                element: <UserHome></UserHome>
            }
        ]
       
    }
  ]);

