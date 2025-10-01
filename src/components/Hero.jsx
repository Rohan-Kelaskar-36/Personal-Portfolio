import React from 'react';
const Hero = () => (
  <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-900 via-purple-900 to-gray-800 text-center px-6 py-16">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
      Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-pink-400">Rohan Kelaskar</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
      A passionate <span className="text-fuchsia-300 font-semibold">Full Stack Developer</span> crafting responsive applications with modern web tech.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 shadow-lg shadow-fuchsia-500/20 transition transform hover:-translate-y-0.5 active:translate-y-0 text-white">View Projects</a>
      <a href="#experience" className="px-6 py-3 rounded-xl bg-gray-900/60 hover:bg-gray-900 border border-white/10 backdrop-blur transition">Experience</a>
      <a href="#certificates" className="px-6 py-3 rounded-xl bg-gray-900/60 hover:bg-gray-900 border border-white/10 backdrop-blur transition">Certifications</a>
      <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur transition">Contact Me</a>
    </div>
  </section>
);

export default Hero;
