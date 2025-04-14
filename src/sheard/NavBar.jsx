import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className=" font-extrabold text-xl uppercase text-light">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="font-extrabold text-xl uppercase text-light">CONTACT us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="font-extrabold text-xl uppercase text-light">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/our-menu" className="font-extrabold text-xl uppercase text-light">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/our-shop/offered" className="font-extrabold text-xl uppercase text-light">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-[#00000079] shadow-sm max-w-[120rem] mx-auto fixed z-50 w-full py-4 lg:px-10 md:px-5 ">
      <div className="navbar-start">
        <Link className="lg:text-xl md:text-md text-sm uppercase text-light text-left"><div><p>Bistro Boss</p> <span className="tracking-[.3rem]">Restaurant</span></div></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Navbar menu content here  */}
          {navLinks}    
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary lg:block hidden">Get started</button>
        <div className="dropdown lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className=" border-0 btn-primary"
              >
                <IoMenu className="text-3xl hover:border-0 text-light" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu  min-h-full bg-phone-nav-bg text-black p-4">
                {/* Sidebar content here */}
                {navLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
