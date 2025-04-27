import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar,isSidebarOpen }) => {
  return (
    <div className="navbar bg-gray-800 fixed top-0 left-0 z-10">
      <div className="navbar-start"  >
        {/* Hamburger Menü İkonu */}
        <div className="dropdown md:hidden" >
       
         <label className="btn btn-circle btn-sm swap swap-rotate"  >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={toggleSidebar} checked={isSidebarOpen}  />

            {/* hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
             
            >
             
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>

            {/* close icon */}
            <svg
              className={`fill-current h-5 w-5 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
        
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="sm:text-lg text-sm">Cafe Life | Admin</h1>
      </div>
      <div className="navbar-end">
        {/* Cart ve Notification */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="flex gap-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/profile/setting" >Settings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
