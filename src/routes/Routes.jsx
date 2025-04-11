
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";


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
            path: "/contact",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        },
      ]
    },
  ]);

