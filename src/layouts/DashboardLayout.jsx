import { FaBookmark, FaCalendarAlt, FaEnvelope, FaHistory, FaHome, FaShoppingCart, FaStar, FaStore, FaUtensils } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import SideBar from "../pages/Dashboard/SideBar";


const DashboardLayout = () => {
    return (
        <div className="lg:flex max-w-[120rem] mx-auto gap-5">
            <div>
                <SideBar></SideBar>
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;