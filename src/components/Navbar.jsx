import React from "react";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/education">Education</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#15564c] shadow-sm">
      <div className="navbar max-w-[1280px] mx-auto px-0 text-white backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <TiThMenu size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-[#068e79] rounded-box z-1 mt-3 w-32 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold">
            DA<span className="text-[#068e79]">Y</span>AL
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div>
          <label className="toggle text-base-content">
            <input type="checkbox" value="dark" className="theme-controller" />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
        <div className="navbar-end mr-2">
          <a className="btn bg-[#068e79] shadow-none border border-[#15564c]">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
