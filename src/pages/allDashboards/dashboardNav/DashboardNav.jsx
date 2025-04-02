import { useState } from "react";
import { NavLink } from "react-router-dom";


const DashboardNav = () => {
      const [isOpen, setIsOpen] = useState(false);
      const navLink = [
        { title: "Hotel", href: "/dashboard/hotel"},
        { title: "Education", href: "/dashboard/education" },
        { title: "Coffee Shop", href: "/dashboard/coffee" },
        { title: "Transport", href: "/dashboard/transport" },
      ];
    return (
        <div className=" mt-1 container mx-auto ">
      <nav className="bg-linear-to-r from-blue-100 to-rose-100 shadow-md ">
        <div className=" flex sm:justify-center items-center p-4">
            <div className="flex items-center gap-x-2">
                {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white text-2xl flex justify-start "
          >
            {isOpen ? "✖"  : "☰"}
          </button>
            </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-6 text-white font-semibold">
            {navLink.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={`${({isActive}) => isActive ? '  text-green-400' : ' text-gray-900 ' } font-bold duration-300 hover:text-blue-500`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>          
          
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="sm:hidden bg-blue-700 text-white text-center max-w-62 absolute left-0 top-16 space-y-4 p-4">
            {navLink.map((item) => (
              <li key={item.href}>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={item.href}
                  className="font-semibold text-gray-900 duration-300 hover:text-gray-300"
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

export default DashboardNav;