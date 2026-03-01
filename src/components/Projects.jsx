import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Code2, Layers3 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "HIRE CONNECT - COLLEGE PLACEMENT PORTAL",
    description:
      "Developed a School & College ERP system with modules for ATS-powered resume scanning, job postings, student management, and placement tracking.",
    stack:
      "TypeScript, Express.js, Mongoose, bcryptJs, Cors, Google generative AI, Cheerio, Cloudinary, Morgan, Multer, Nodemailer",
  },
  {
    title: "PROBILLS – MULTI-STORE BILLING SOFTWARE",
    description:
      "Built Pro Bills, a multi-store MERN-based billing application with role-based access (Admin, Cashier, Manager), improving sales management efficiency.",
    stack:
      "React.js, Express.js, Mongoose, bcryptJs, Cors, Nodemailer, Axios, Tailwind CSS, js-pdf, Gemini API",
  },
  {
    title: "VINTAGE BIDS - AN ANTIQUE ONLINE AUCTION WEB APPLICATION",
    description:
      "A feature-rich auction platform where users can bid on vintage collectibles.",
    stack: "React, Node.js, Express, MongoDB, Bootstrap, Nodemailer",
  },
  {
    title: "BOOK AURA - ONLINE BOOK STORE",
    description:
      "An online bookstore application that allows users to browse and search books with a responsive UI and secure authentication.",
    stack: "React, Node.js, Express, MongoDB, Bootstrap",
  },
  {
    title: "KNOW WEATHER - KNOW YOUR CITY WEATHER",
    description:
      'Deployed the "Know Weather" web app to provide real-time weather information to users.',
    stack: "HTML, CSS, JavaScript, Bootstrap, Rapid API",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 md:px-10"
  >
    <div className="pointer-events-none absolute inset-0 opacity-35 bg-grid-slate" />
    <div className="relative z-10 mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col items-center justify-between gap-6 md:mb-12 md:flex-row"
      >
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
            Case Studies
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Real-world applications showcasing{" "}
            <span className="font-semibold text-fuchsia-300">
              full-stack problem solving
            </span>{" "}
            from Placement Portal and billing systems to auction platforms and utilities.
          </p>
        </div>

        <Card className="w-full max-w-sm border-fuchsia-500/40 bg-slate-950/90">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-300">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base text-slate-100">
                Project Depth
              </CardTitle>
              <p className="text-xs text-slate-400">
                Multi-module, production-style applications with real users.
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between pt-1 text-xs text-slate-300">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Major Projects
              </p>
              <p className="mt-1 text-lg font-semibold text-fuchsia-300">
                {projects.length}+
              </p>
            </div>
            <p className="max-w-[9rem] text-[0.7rem] text-slate-400">
              Focusing on scalability, clean architecture, and UX.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <Tilt
            key={project.title}
            glareEnable
            glareBorderRadius="1.5rem"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className="h-full rounded-3xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-[1px]"
          >
            <div className="flex h-full flex-col rounded-[1.4rem] bg-slate-950/95 p-6 shadow-xl shadow-fuchsia-900/50">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-50">
                  {project.title}
                </h3>
                <Code2 className="mt-1 h-4 w-4 flex-shrink-0 text-fuchsia-300" />
              </div>
              <p className="mb-3 text-sm text-slate-300">
                {project.description}
              </p>
              <p className="mt-auto text-xs text-slate-400">
                <span className="font-semibold text-slate-200">
                  Tech Stack:
                </span>{" "}
                {project.stack}
              </p>
            </div>
          </Tilt>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Button
          asChild
          size="lg"
          className="inline-flex items-center gap-2 bg-slate-900 px-7 py-3 text-base shadow-lg shadow-slate-900/60"
        >
          <Link
            to="https://github.com/Rohan-Kelaskar-36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Projects;
