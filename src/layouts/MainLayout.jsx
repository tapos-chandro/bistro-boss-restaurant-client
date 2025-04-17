import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../sheard/NavBar";
import Footer from "../sheard/Footer";

const MainLayout = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  const hightNavFooter = pathname === "/login" || pathname === "/register";

  return (
    <div>
      <div className="max-w-[120rem] mx-auto">
        {hightNavFooter || <NavBar></NavBar>}
        <div>
          <Outlet />
        </div>
        {hightNavFooter || <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
