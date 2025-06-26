import React from 'react';

const About = () => (
  <section id="about" className="min-h-screen px-8 py-20 bg-white text-gray-900">
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-700 leading-relaxed">
        I'm a <span className="font-semibold text-indigo-600">Full Stack Web Developer</span> with a passion for building intuitive, performant, and scalable applications.
        I enjoy transforming complex problems into elegant and user-friendly solutions.
      </p>


<div>
        <h3 className="text-2xl font-semibold mb-2">🎓 Education</h3>
 <p className="text-gray-700 text-lg">
          Master of Computer Applications — [Christ Academy Institute for Advanced Studies] <br />
          Graduation Year: [2025]
        </p>


        <p className="text-gray-700 text-lg">
          Bachelor of Computer Applications — [Government First Grade College,Honnavar] <br />
          Graduation Year: [2023]
        </p>
      </div>




      <div>
        <h3 className="text-2xl font-semibold mb-2">💼 What I Do</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-lg">
          <li>Build responsive web apps using MERN Stack</li>
          <li>Develop RESTful APIs and integrate with databases</li>
          <li>Deploy and manage full-stack apps on modern cloud platforms</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">🎯 Interests & Hobbies</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-lg">
          <li>Solving coding challenges on LeetCode</li>
          <li>Exploring new technologies and tools</li>
          <li>Watching tech YouTube & documentaries</li>
          <li>Playing chess and cricket</li>
                    <li>Very Good at drawing and Thread Arts</li>

        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">🌱 My Philosophy</h3>
        <p className="text-gray-700 text-lg">
          I believe in continuous learning, clean code, and building software that makes an impact. I'm always excited to contribute to projects that challenge me to grow.
        </p>
      </div>
    </div>
  </section>
);

export default About;
