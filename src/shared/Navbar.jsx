import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navLink = [
    { title: "Home", href: "/" },
    { title: "Modals", href: "/modals" },
    { title: "Form", href: "/form" },
    { title: "Card", href: "/card" },
    { title: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div className=" ">
      <nav className="bg-blue-600 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-x-2">
                {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl flex justify-start "
          >
            {isOpen ? "✖"  : "☰"}
          </button>
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Logo</div>
            </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-semibold">
            {navLink.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={`${({isActive}) => isActive ? '  text-green-400' : ' text-white ' } font-bold duration-300 `}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>          
          <div className="flex items-center gap-1">
            <button className="font-semibold text-white duration-300 hover:text-gray-50">Login</button>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative duration-300">
                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="profile" />
                {dropdownOpen && <ul className="bg-amber-300 absolute top-12 duration-300 right-0 px-4 rounded-md">
                    <li><NavLink>Profile</NavLink></li>
                    <li><NavLink>Logout</NavLink></li>
                </ul>
                }
            </button>
        </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-blue-700 text-white text-center max-w-62 absolute left-0 top-16 space-y-4 p-4">
            {navLink.map((item) => (
              <li key={item.href}>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={item.href}
                  className="font-semibold hover:text-primary duration-300 hover:text-gray-300"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        
      </nav>
      
    </div>
  );
};

export default Navbar;
