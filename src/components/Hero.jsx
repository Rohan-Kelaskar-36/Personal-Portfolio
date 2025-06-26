import React from 'react';

const Hero = () => (
  <section id="hero" className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-900 to-gray-800 text-center px-6">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-indigo-400">Rohan Kelaskar</span></h1>
    <p className="text-lg md:text-xl max-w-xl text-gray-300 mb-6">
      A passionate <span className="text-purple-300 font-semibold">Full Stack Developer</span> crafting responsive applications using React, Node.js & Tailwind CSS.
    </p>
    <a href="#projects" className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md shadow text-white">View Projects</a>
  </section>
);

export default Hero;
