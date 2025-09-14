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
        <div className="font-mono m-10">
            <div className="flex flex-wrap justify-between">
                <div>
                    <a href = "/">
                        <Logo />
                    </a>
                    
                </div>
                <div>
                    {
                        navLinks.map((link) => (
                            <Link key={link.href} href = {link.href} className="text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 text-xl font-medium">
                                <span className="text-purple-400">/</span>{link.label}
                            </Link>
                        ))

                    }
                </div>
            </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700"></div>
        </>
    )
};

export default Navbar;
