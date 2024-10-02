import React from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../assets/others/profile.png'
import { LuMenuSquare } from "react-icons/lu";
const Navbar = () => {
  const navLinks = <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : "font-bold text-white "
      }
    >
      HOME
    </NavLink>
    <NavLink
      to="/contactUs"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : "font-bold text-white "
      }
    >
      CONTACT US
    </NavLink>
    <NavLink
      to="/dashboard"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : "font-bold text-white "
      }
    >
      DASHBOARD
    </NavLink>
    <NavLink
      to="/ourMenu"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : "font-bold text-white "
      }
    >
      OUR MENU
    </NavLink>
    <NavLink
      to="/ourShop"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : "font-bold text-white "
      }
    >
      OUR SHOP
    </NavLink>
  </>
  return (
    <div>
      <div className="navbar fixed z-10 px-4  bg-[#05050576]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-xl text-yellow-300">
            <LuMenuSquare />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#4a401976]">
              {navLinks}
            </ul>
          </div>
          <a className=" "><span className='font-extrabold md:text-[10px] lg:text-[20px] text-white  '>BISTRO BOSS</span> <br /> <span className='uppercase hidden md:block text-white'>R e s t a u r a n t</span></a>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 font-bold ">
              {navLinks}

            </ul>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>

            </div>

          </div>
          <div>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-300  ml-4  mr-4 font-bold " : " ml-4  mr-4   font-bold text-white "
              }
            >
              SIGNIN
            </NavLink>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt=""
                  src={profileIcon}  className='image-zoom' />
                  
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;