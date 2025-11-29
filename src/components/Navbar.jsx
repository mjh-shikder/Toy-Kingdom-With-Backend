import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, Links, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [showTooltip, setShowTooltip] = useState(false);

  // console.log(showTooltip, "show Tooltip");

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Logout Successful");
      })
      .catch((error) => {
        toast(error);
      });
  };

  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/all-toys"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          All Toys
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          My Profile
        </NavLink>{" "}
      </li>
      {user && <NavLink
          to={"/contribute"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          Become a Seller
        </NavLink> }
    </>
  );
  return (
    <div className="navbar bg-base-200 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* small screen  */}
          <ul
            tabIndex="-1"
            className=" lg:hidden dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow items-center text-center flex flex-col justify-center "
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" text-xl">
          <img className="w-36" src={Logo} alt="Logo" />
        </Link>
      </div>
      {/* desktop */}
      <div className="navbar-center hidden lg:flex  ">
        <ul className=" space-x-5 px-1 flex items-center">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <Link to={'/profile'}>
            <div
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="avatar mr-3.5 items-center "
            >
              {showTooltip && (
                <p className="mr-3.5 text-lg border rounded-lg px-2 text-primary font-semibold ">
                  {user?.displayName}
                </p>
              )}
              
                <div className="w-12 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
            </div>{" "}
              </Link>
            <button
              onClick={handleLogout}
              className="btn btn-primary rounded-xl text-white "
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="btn btn-primary rounded-xl text-white "
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
