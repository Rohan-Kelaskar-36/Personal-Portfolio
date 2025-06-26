import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contact = () => (
  <section id="contact" className="min-h-screen bg-gray-800 text-white py-20 px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-lg mb-4">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* Email */}
      <div className="mb-6">
        <a
          href="mailto:rohankyourusernameelaskar127@gmail.com"
          className="inline-flex items-center gap-2 text-indigo-400 hover:underline text-lg"
        >
          <FaEnvelope /> rohankelaskar127@gmail.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-3xl mt-4">
        <Link
          to="https://github.com/Rohan-Kelaskar-36"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/rohan-kelaskar-890418234/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://www.instagram.com/rohan___kelaskar?igsh=MTZvOXp5eW15ZmVuOQ=="
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  </section>
);

export default Contact;
