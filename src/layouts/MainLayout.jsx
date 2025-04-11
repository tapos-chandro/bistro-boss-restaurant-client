import { Outlet } from "react-router-dom";
import NavBar from "../sheard/NavBar";
import Footer from "../sheard/Footer";
import Banner from "../pages/Home/Banner";

const MainLayout = () => {
  return (
    <div>
        <div className="max-w-[120rem] mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>

    <div className="max-w-[82.5rem] mx-auto pt-24">
    
    <Outlet/>
    </div>
      <Footer/>
    </div>
    </div>
  );
};

export default MainLayout;
