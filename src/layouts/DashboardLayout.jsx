
import { Outlet } from "react-router";
import SideBar from "../pages/Dashboard/SideBar";


const DashboardLayout = () => {
    return (
        <div className="lg:flex max-w-[120rem] mx-auto bg-dashboard-bg h-fit ">
            <div className="h-full">
                <SideBar></SideBar>
            </div>
            <div className="w-full bg-light">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;