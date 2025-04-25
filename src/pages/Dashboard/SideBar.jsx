
import { FaBookmark, FaCalendarAlt, FaEnvelope, FaHistory, FaHome, FaShoppingCart, FaStar, FaStore, FaUtensils } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router";

import useUser from "../../hooks/useUser";


const SideBar = () => {

    const [usersRole, isLoading] = useUser()
    if (isLoading) {
        return

    }

    return (

        <div>
            {usersRole.role === "customer" ?
                <div className="lg:w-60 text-black h-full px-4 py-6 space-y-6">
                    <h1 className="text-xl font-bold tracking-widest mb-4">BISTRO BOSS <br /> <span className="text-sm">RESTAURANT</span></h1>
                    <ul className="space-y-4">
                        <li><NavLink to="user" className="flex items-center gap-2"><FaHome /> User Home</NavLink></li>
                        <li><NavLink to="payment" className="flex items-center gap-2"><FaCalendarAlt /> Payment</NavLink></li>
                        <li><NavLink to="payment-history" className="flex items-center gap-2"><FaHistory /> Payment History</NavLink></li>
                        <li><NavLink to="my-card" className="flex items-center gap-2"><FaShoppingCart /> My Cart</NavLink></li>
                        <li><NavLink to="/review" className="flex items-center gap-2"><FaStar /> Add Review</NavLink></li>
                        <li><NavLink to="/booking" className="flex items-center gap-2"><FaBookmark /> My Booking</NavLink></li>
                    </ul>
                    <hr className="border-t border-white my-4" />
                    <ul className="space-y-4">
                        <li><Link to="/" className="flex items-center gap-2"><FaHome /> Home</Link></li>
                        <li><Link to="/menu" className="flex items-center gap-2"><FaUtensils /> Menu</Link></li>
                        <li><Link to="/shop" className="flex items-center gap-2"><FaStore /> Shop</Link></li>
                        <li><Link to="/contact" className="flex items-center gap-2"><FaEnvelope /> Contact</Link></li>
                    </ul>
                </div> :
                <div >
                    <div className="lg:w-60 bg-[#C2924D] text-black h-full px-4 py-6 space-y-6">
                        <h1 className="text-xl font-bold tracking-widest mb-4">BISTRO BOSS <br /> <span className="text-sm">RESTAURANT</span></h1>
                        <ul className="space-y-4">
                            <li><NavLink to="admin" className="flex items-center gap-2"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="add-items" className="flex items-center gap-2"><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to="manage-items" className="flex items-center gap-2"><FaHistory /> Manage Items</NavLink></li>
                            <li><NavLink to="my-card" className="flex items-center gap-2"><AiOutlineBars />Manage Bookings</NavLink></li>
                            <li><NavLink to="all-users" className="flex items-center gap-2"><FaStar /> All Users</NavLink></li>
                            <li><NavLink to="/booking" className="flex items-center gap-2"><FaBookmark /> My Booking</NavLink></li>
                        </ul>
                        <hr className="border-t border-white my-4" />
                        <ul className="space-y-4">
                            <li><Link to="/" className="flex items-center gap-2"><FaHome /> Home</Link></li>
                            <li><Link to="/menu" className="flex items-center gap-2"><FaUtensils /> Menu</Link></li>
                            <li><Link to="/shop" className="flex items-center gap-2"><FaStore /> Shop</Link></li>
                            <li><Link to="/contact" className="flex items-center gap-2"><FaEnvelope /> Contact</Link></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default SideBar;