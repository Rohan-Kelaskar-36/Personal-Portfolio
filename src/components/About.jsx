import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { GraduationCap, BriefcaseBusiness, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const About = () => (
  <section
    id="about"
    className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-4 py-20 sm:px-6 md:px-10"
  >
    <div className="pointer-events-none absolute inset-0 opacity-35 bg-grid-slate" />
    <div className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] md:items-start">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          About Me
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Full Stack Web Developer
        </h2>
        <p className="text-sm text-slate-300 sm:text-base">
          I&apos;m a{" "}
          <span className="font-semibold text-indigo-300">
            Full Stack Web Developer
          </span>{" "}
          with a passion for building intuitive, performant, and scalable
          applications. I enjoy transforming complex problems into elegant and
          user-friendly solutions.
        </p>

        <Card className="mt-4 border-indigo-500/40 bg-slate-950/90">
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base text-slate-100">
                Education
              </CardTitle>
              <p className="text-xs text-slate-400">
                Strong academic foundation in computer applications.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-200">
            <div>
              <p className="font-semibold">
                Master of Computer Applications — Christ Academy Institute for
                Advanced Studies
              </p>
              <p className="text-xs text-slate-400">Graduation Year: 2025</p>
            </div>
            <div>
              <p className="font-semibold">
                Bachelor of Computer Applications — Government First Grade
                College, Honnavar
              </p>
              <p className="text-xs text-slate-400">Graduation Year: 2023</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="space-y-5"
      >
        <Tilt
          glareEnable
          glareBorderRadius="1.4rem"
          tiltMaxAngleX={14}
          tiltMaxAngleY={14}
          className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
        >
          <div className="rounded-[1.3rem] bg-slate-950/95 p-6 shadow-xl shadow-slate-900/80">
            <div className="mb-5 flex items-center gap-2 text-slate-100">
              <BriefcaseBusiness className="h-5 w-5 text-indigo-400" />
              <h3 className="text-lg font-semibold">What I Do</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Build responsive web apps using the MERN stack.</li>
              <li>Develop RESTful APIs and integrate with databases.</li>
              <li>Deploy and manage full-stack apps on modern cloud platforms.</li>
            </ul>
          </div>
        </Tilt>

        <Tilt
          glareEnable
          glareBorderRadius="1.4rem"
          tiltMaxAngleX={14}
          tiltMaxAngleY={14}
          className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
        >
          <div className="space-y-5 rounded-[1.3rem] bg-slate-950/95 p-6 shadow-xl shadow-slate-900/80">
            <div>
              <div className="mb-3 flex items-center gap-2 text-slate-100">
                <Target className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold">Interests & Hobbies</h3>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>Solving coding challenges on LeetCode.</li>
                <li>Exploring new technologies and tools.</li>
                <li>Watching tech YouTube & documentaries.</li>
                <li>Playing chess and cricket.</li>
                <li>Drawing and creating thread arts.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                My Philosophy
              </h3>
              <p className="text-sm text-slate-300">
                I believe in continuous learning, clean code, and building
                software that makes an impact. I&apos;m always excited to
                contribute to projects that challenge me to grow.
              </p>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  </section>
);

export default About;

