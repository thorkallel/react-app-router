import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  return (
    <nav className="flex gap-4 bg-gray-100 p-4 text-align-center text-zinc-400">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-link icon flex items-center gap-2 text-[#5f0101] font-bold"
            : "nav-link icon flex items-center gap-2 text-[#ba0000]"
        }
        activeClassName="text-[#5f0101] font-bold"
        to="/"
      >
        <Icon icon="mdi:home" />
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-link icon flex items-center gap-2 text-[#5f0101] font-bold"
            : "nav-link icon flex items-center gap-2 text-[#ba0000"
        }
        activeClassName="text-[#5f0101] font-bold"
        to="/about"
      >
        <Icon icon="mdi:account" />
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-link icon flex items-center gap-2 text-[#5f0101] font-bold"
            : "nav-link icon flex items-center gap-2 text-[#ba0000"
        }
        activeClassName="text-[#5f0101] font-bold"
        to="/products"
      >
        <Icon icon="mdi:shopping" />
        Products
      </NavLink>
    </nav>
  );
};
