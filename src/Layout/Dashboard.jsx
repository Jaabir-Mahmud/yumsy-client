import { FaCalendar, FaHome, FaShoppingCart, FaShoppingBasket } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdReviews, MdMenuBook, MdContactPhone } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* Dashboard Sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar /> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <RiSecurePaymentFill /> Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myCart">
                            <FaShoppingCart /> My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <MdReviews /> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myBooking">
                            <CiBookmarkPlus /> My Booking
                        </NavLink>
                    </li>


                    <hr className="mt-8 mb-8"/>



                    <li>
                        <NavLink to="/">
                            <IoHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <MdMenuBook /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/shop">
                            <FaShoppingBasket /> Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact">
                            <MdContactPhone /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-12">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
