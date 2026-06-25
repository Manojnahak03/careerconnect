import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition duration-300";

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Career Connect
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">

          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          {token && (
            <>
              <li>
                <NavLink to="/jobs" className={navLinkClass}>
                  Jobs
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">

          {!token ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition duration-300"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;