
import { Outlet } from "react-router";
import SideBar from "../pages/Dashboard/SideBar";


const DashboardLayout = () => {
    return (
        <div className="lg:flex max-w-[120rem] mx-auto">
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