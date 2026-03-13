import React from 'react';

function About() {
  return (
    <section id="about" className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">About Me</h2>
        <div className="max-w-3xl mx-auto text-center leading-relaxed">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am a <strong>Software Engineer</strong> and B.Tech student specializing in
            <strong> React.js and the MERN stack</strong>. I focus on building scalable web
            applications and solving complex problems through <strong>Data Structures and Algorithms</strong>.
            I love turning ideas into clean, functional code that delivers exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;