import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume'; // Imported Resume
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/experience';
import About from './components/about';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
    });
  }, []);

  return (
    <PortfolioProvider>
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-poppins transition-colors duration-300 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Resume /> {/* Resume Section Added Here */}
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;