"use client";
import React from "react";

function Navbar() {

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" }
  ];


    return (
      <header className="hidden sm:flex items-center justify-center fixed top-10 z-50 px-4 py-3 w-full">
        {/* desktop nav */}
        <div className="flex items-center pl-4 p-3 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-lg text-zinc-700 w-fit font-bold">
            <nav className="space-x-8 flex items-center">
              {links.map((link) => (
                <a 
                key={link.name} 
                href={link.href} 
                className="hover:opacity-80 transition-opacity">
                  {link.name}
                </a>
              ))}

            </nav>
        </div> 
      </header>
    );
}

export default Navbar;
