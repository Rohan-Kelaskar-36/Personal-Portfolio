import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => (
  <section id="skills" className="min-h-screen bg-gray-100 py-20 px-8">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      {/* Programming Languages */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">Programming Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Java', 'JavaScript', 'Python', 'C', 'C++', 'PHP'].map((lang) => (
            <div key={lang} className="bg-white shadow p-4 rounded">{lang}</div>
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">Web Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap',
            'Node.js','Express.js', 'MongoDB', 'MySQL', 'Postman', 'RESTful APIs','Responsive Design'
          ].map((tech) => (
            <div key={tech} className="bg-white shadow p-4 rounded">{tech}</div>
          ))}
        </div>
      </div>

      {/* Version Control */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">Version Control</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white shadow p-4 rounded">Git</div>
                    <div className="bg-white shadow p-4 rounded">GitHub</div>

        </div>
      </div>

      {/* Deployment Platforms */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">Deployment Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['AWS', 'Render', 'Netlify', 'Vercel'].map((platform) => (
            <div key={platform} className="bg-white shadow p-4 rounded">{platform}</div>
          ))}
        </div>
      </div>

      {/* LeetCode Profile */}
      <div className="mt-8">
        <h3 className="text-xl mb-2">Check out my LeetCode profile:</h3>
        <Link to="https://leetcode.com/u/Rohan3602/" target="_blank" rel="noreferrer">
          <button className="px-6 py-2 bg-indigo-500 hover:bg-green-600 text-white rounded-md shadow">
            Rohan Kelaskar
          </button>
        </Link>
      </div>



      {/* download my resume */}
  <div className="mt-8">
  <h3 className="text-xl mb-2">Download My Resume:</h3>
  <a
   href="/Personal-Portfolio/Rohan_kelaskar_MERN.pdf"
    download
    className="px-6 py-2 bg-green-500 hover:bg-indigo-600 text-white rounded-md shadow"
  >
    Download Resume
  </a>
</div>



    </div>
  </section>
);

export default Skills;
