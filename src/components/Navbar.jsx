import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {

return ( <nav
   className="
   fixed top-0 left-0 w-full z-50
   backdrop-blur-md
    dark:bg-slate-950/80
   border-b border-slate-300 dark:border-slate-800
   transition-all duration-300
   "
 > <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <h1 className="text-3xl font-bold text-cyan-500">
      Ayushi
    </h1>

    <ul className="hidden md:flex gap-8 text-slate-700 dark:text-slate-300">

      <li><a href="#about" className="hover:text-cyan-500">About</a></li>

      <li><a href="#skills" className="hover:text-cyan-500">Skills</a></li>

      <li><a href="#projects" className="hover:text-cyan-500">Projects</a></li>

      <li><a href="#experience" className="hover:text-cyan-500">Experience</a></li>

      <li><a href="#contact" className="hover:text-cyan-500">Contact</a></li>

    </ul>

   

  </div>
</nav>


);
};

export default Navbar;
