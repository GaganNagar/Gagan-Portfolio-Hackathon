import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-8 text-center transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#hero" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.linkedin.com/in/gagannagar" target="_blank" rel="noreferrer" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/GaganNagar" target="_blank" rel="noreferrer" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200"><i className="fab fa-github"></i></a>
            <a href="https://instagram.com/gagan.nagarr" target="_blank" rel="noreferrer" className="hover:text-violet-400 dark:hover:text-neon-400 transition-colors duration-200"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Gagan Nagar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;