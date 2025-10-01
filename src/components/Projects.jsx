import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Projects = () => (
  <section id="projects" className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20 px-6 sm:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">HIRE CONNECT - COLLEGE PLACEMENT PORTAL</h3>
          <p className="text-gray-700 mb-2">
          Developed a School & College ERP system with modules for ATS-powered resume scanning, job postings, student management, and 
          placement tracking.           </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong>  TypeScript, Express.js, Mongoose, bcryptJs, Cors, Google generative AI, Cheerio, cloudinary, morgan, multer, nodemailer. 
          </p>
        </div>



        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">GROOVYBILLS – MULTI-STORE BILLING SOFTWARE</h3>
          <p className="text-gray-700 mb-2">
          Built Groovy Bills, a multi-store MERN-based billing application with role-based access (Admin, Cashier, Manager), improving sales 
management efficiency.          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong>  : React.js, Express.js, Mongoose, bcryptJs, Cors, nodemailer, axios, Tailwind CSS,  js-pdf, Gemini API. 
          </p>
        </div>













        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">VINTAGE BIDS - AN ANTIQUE ONLINE AUCTION WEB APPLICATION</h3>
          <p className="text-gray-700 mb-2">
            A feature-rich auction platform where users can bid on vintage collectibles.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Bootstrap,nodemailer
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">BOOK AURA - ONLINE BOOK STORE</h3>
          <p className="text-gray-700 mb-2">
            An online bookstore application that allows users to browse, search books with a responsive UI and secure authentication.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Bootstrap
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">KNOW WEATHER - KNOW YOUR CITY WEATHER</h3>
          <p className="text-gray-700 mb-2">
            Deployed the "Know Weather" web app to provide real-time weather information to users.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Bootstrap, Rapid API
          </p>
        </div>
      </div>

      {/* GitHub Button */}
    

<div className="mt-12 text-center">
  <Link
    to="https://github.com/Rohan-Kelaskar-36"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition text-lg shadow-sm"
  >
    <FaGithub className="text-2xl" />
    View More on GitHub
  </Link>
</div>

    </div>
  </section>
);

export default Projects;
