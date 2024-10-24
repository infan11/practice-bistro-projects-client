
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPhone, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { BsCart2 } from "react-icons/bs";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import { MdRestaurantMenu } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
    const { user } = useAuth()
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const navLinks = <>

        {isAdmin ? <>
            <li>
                <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  }   to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home</NavLink>
            </li>
            <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/addItem">
                    <IoMdAdd />
                    Add Item</NavLink>
            </li>

            <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/cart">
                    <BsCart2 />
                    My Cart<div className="badge badge-secondary text-white">{cart.length}</div></NavLink>
            </li>

            <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/bookings">
                    <FaBook></FaBook>
                    Menage Bokings</NavLink>
            </li>
            <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/users">
                    <FaUsers></FaUsers>
                    All Users<div className="badge badge-accent badge-outline">{user?.length}</div></NavLink>
            </li>
            
            <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/history">
                    <FaCalendar></FaCalendar>
                    History</NavLink>
            </li>
        </>
            :
            <>
                <li>
                    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                </li>
                <li>
                <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/cart">
                    <BsCart2 />
                    My Cart<div className="badge badge-secondary text-white">{cart.length}</div></NavLink>
            </li>

                <li>
                    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/dashboard/history">
                        <FaCalendar></FaCalendar>
                        History</NavLink>
                </li>




            </>
        }
        {/* shared nav links */}
        <div className="divider"></div>
        <li>
            <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/">
                <FaHome></FaHome>
                Home</NavLink>
        </li>
        <li>
            <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/ourMenu">
                <MdRestaurantMenu />
                Menu</NavLink>
        </li>
        <li>
            <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/ourShop">
                <BsCart2 />
                Our Shop</NavLink>
        </li>
        <li>
            <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-500 p-3 text-white font-bold" : "hover:bg-orange-500 hover:text-white p-3 font-bold"
  } to="/contactUs">
                <FaEnvelope></FaEnvelope>
                Contact</NavLink>
        </li>
    </>
    return (
        <div>
            <Helmet>

                <title>Dashboard  </title>

            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><FiMenu /></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full fromDivNavM text-base-content">
                        {/* Sidebar content here */}
                        <p className="font-extrabold text-2xl text-orange-500 flex items-center gap-4"><RxDashboard /> DASHBOARD</p>
                        {navLinks}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;