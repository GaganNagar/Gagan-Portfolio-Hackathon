import React, { useState, useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(PortfolioContext);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-sm shadow-md z-50 transition-colors duration-300">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#hero" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Gagan Nagar</a>
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#hero" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Home</a>
                    <a href="#about" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">About</a>
    
                    <a href="#projects" className="font-medium text-xl nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Projects</a>
                    <a href="#experience" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Experience</a>
                    <a href="#education" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Education</a>
                    {/* <a href="#courses" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Certifications</a> */}
                    {/* <a href="#resume" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Resume</a> */}
                    <a href="#contact" className="font-medium text-xl  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Contact</a>
                </div>

                <div className="flex items-center space-x-4">
                    <div>
                        <a href="#resume" className="btn-primary font-medium  nav-link text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-neon-400 transition-colors duration-200">Resume</a>
                    </div>
                    {/* Theme Toggle Button connected to Context API */}
                    <button
                        onClick={toggleTheme}
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-neon-400 border border-transparent hover:border-violet-300 dark:hover:border-neon-500 shadow-sm hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
                    >
                        <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'} text-xl transform transition-transform duration-500 hover:rotate-45`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 py-4 shadow-lg transition-all`}>
                <a href="#hero" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</a>
                <a href="#about" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
                <a href="#education" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Education</a>
                <a href="#projects" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
                <a href="#projects" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Experience</a>
                
                <a href="#courses" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Certifications</a>
                <a href="#resume" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Resume</a>
                <a href="#contact" onClick={closeMenu} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
            </div>
        </header>
    );
}

export default Navbar;