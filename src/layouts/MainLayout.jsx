import { Outlet } from "react-router-dom";
import NavBar from "../sheard/NavBar";
import Footer from "../sheard/Footer";

const MainLayout = () => {
  return (
    <div>
        <div className="max-w-[120rem] mx-auto">
        <NavBar></NavBar>

    <div className="max-w-[82.5rem] mx-auto pt-24">
    
    <Outlet/>
    </div>
      <Footer/>
    </div>
    </div>
  );
};

export default MainLayout;
