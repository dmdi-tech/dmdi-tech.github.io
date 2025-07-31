"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" }
  ];


    return (
      <header className="sm:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200 w-full">
        <div className="flex items-center justify-between px-6 py-6 max-w-full">
            <div className="flex items-center justify-between w-full rounded-2xl text-zinc-700">
                <Link className="hover:opacity-80 transition-opacity" aria-label="Home" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </Link>

                <button className="p-2 hover:opacity-80 transition-opacity" 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        aria-label="Toggle Menu" 
                        tabIndex={0}
                        >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

             {/* mobile Menu */}
            {menuOpen && (
                <div className="sm:hidden fixed top-[90px] left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-zinc-200
                    shadow-lg z-40 max-w-full overflow-hidden">
                    <div className="py-2 max-w-full">
                        {links.map((link) => (
                            <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 text-xl font-semibold"
                            >
                            {link.name}
                            </a>
                        ))}

                    </div>

                </div>
            )}

        </div>

      </header>
    );
}

export default NavbarMobile;
