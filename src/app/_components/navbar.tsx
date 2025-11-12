'use client';

import Link from "next/link";
import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="logoaditi.svg" alt="logo" className="w-6 h-6" />
    <span className="text-2xl font-bold text-white">Aditiii</span>
  </div>
);

const Navbar = () => {
    const navLinks = [
        { href: "/", label: "home"},
        { href: "works", label: "works"},
        { href: "about", label: "about"},
        { href: "contact", label: "contact"}
    ]

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="font-mono m-4 md:m-10">
            <div className="flex justify-between items-center">
                <div>
                    <a href = "/">
                        <Logo />
                    </a>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    {
                        navLinks.map((link) => (
                            <Link key={link.href} href = {link.href} className="text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 text-xl font-medium">
                                <span className="text-purple-400">/</span>{link.label}
                            </Link>
                        ))
                    }
                </div>

                {/* Hamburger Button */}
                <button 
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-2 mt-4 pb-4">
                    {
                        navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 text-lg font-medium block"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-purple-400">/</span>{link.label}
                            </Link>
                        ))
                    }
                </div>
            )}
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700"></div>
        </>
    )
};

export default Navbar;
