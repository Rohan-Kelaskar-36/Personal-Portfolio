import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;