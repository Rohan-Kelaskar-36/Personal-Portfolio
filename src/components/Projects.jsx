import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Projects = () => (
  <section id="projects" className="min-h-screen bg-white py-20 px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Vintage Bids</h3>
          <p className="text-gray-700 mb-2">
            A feature-rich auction platform where users can bid on vintage collectibles.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Bootstrap
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Book Aura</h3>
          <p className="text-gray-700 mb-2">
            An online bookstore application that allows users to browse, search books with a responsive UI and secure authentication.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Bootstrap
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Know Weather</h3>
          <p className="text-gray-700 mb-2">
            Deployed the "Know Weather" web app to provide real-time weather information to users.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Bootstrap, Rapid API
          </p>
        </div>
      </div>

      {/* GitHub Button */}
    

<div className="mt-10 text-center">
  <Link
    to="https://github.com/Rohan-Kelaskar-36"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-lg"
  >
    <FaGithub className="text-2xl" />
    View on GitHub
  </Link>
</div>

    </div>
  </section>
);

export default Projects;
