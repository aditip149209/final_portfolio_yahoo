import React from "react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="logoaditi.svg" alt="logo" className="w-6 h-6" />
    <span className="text-xl font-bold text-white">Aditiii</span>
  </div>
);

const Footer = () => {
    
    return(
    <footer className="w-full text-lg py-6 font-mono text-center text-gray-400">
               <div className="h-0.5 mt-10 mb-10 w-full bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700"></div>
        
        <div className="flex justify-around p-10 text-left">
            <div className="flex flex-col gap-2">
                <Logo/ >
                <p className="text-md">full-stack developer</p>
                <p className="text-md">software engineer</p>
            </div>
            <div>
                <span className="text-xl font-bold text-white"> Media</span>
                <div className="flex flex-wrap">
                <a href="https://github.com/aditip149209" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl hover:text-purple-400 transition-colors">
                    <img src="Github.svg" alt="GitHub Icon" className="w-10 h-10" />
                </a>
                <a href="https://linkedin.com/in/aditi-pandey1932" target="_blank" rel="noopener noreferrer" aria-label="Figma" className="text-2xl hover:text-purple-400 transition-colors">
                    <img src="Linkedin.svg" alt="Linkedin Icon" className="w-10 h-10" />
                </a>
                <a href="https://discord.com/users/852746966352789515" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-2xl hover:text-purple-400 transition-colors">
                    <img src="Discord.svg" alt="Discord Icon" className="w-10 h-10" />
                </a>
                </div>
            </div>
        </div>

        <div className="container mx-auto">
            <p>Made with passion by Aditi</p>
            <p className="mt-2 text-lg">
                Designed in Figma and coded with Next.js & Tailwind CSS.
            </p>
        </div>
    </footer>
    )
};

export default Footer