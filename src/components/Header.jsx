import React from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="Page Logo" />
        <button className="bg-gradient-to-r from-red-400 to to-orange-400 text-xs px-1.5 py-0.5 rounded-xl">
          Hoster is Hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Find Domains</a>
        </li>
        <li>
          <a href="#">Why Hosterr?</a>
        </li>
      </ul>
      <button className="hidden lg:flex rounded-md px-3 py-2 bg-blue-400 hover:bg-blue-600 text-white font-lato">
        Sign In
      </button>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
}

export default Header;
