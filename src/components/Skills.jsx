import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Code2, Database, Github, Globe2, Server } from "lucide-react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Skills = () => {
  const languageSkills = [
    "Java",
    "JavaScript",
    "Python",
    "C",
    "C++",
    "PHP",
  ];

  const webSkills = [
    "HTML5",
    "CSS3",
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Postman",
    "RESTful APIs",
    "Responsive Design",
    "Redux",
    "ContextAPI"
  ];

  const dbSkills = ["MongoDB", "MySQL"];
  const platforms = ["Render", "Netlify", "Vercel"];

  const chartData = [
    { name: "Frontend", value: 88, fill: "#a855f7" },
    { name: "Backend", value: 82, fill: "#6366f1" },
    { name: "Database", value: 78, fill: "#22c55e" },
  ];

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20 px-4 sm:px-6 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-grid-slate" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Skills
            </h2>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              A balanced mix of{" "}
              <span className="font-semibold text-indigo-300">
                frontend, backend, and database
              </span>{" "}
              skills to ship complete products from idea to deployment.
            </p>
          </div>

          <Card className="w-full max-w-xs border-indigo-500/40 bg-slate-950/90">
            <CardHeader className="pb-1">
              <CardTitle className="flex items-center gap-2 text-sm text-slate-100">
                <Code2 className="h-4 w-4 text-indigo-400" />
                Skill Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <div className="h-32 w-32">
                <ResponsiveContainer>
                  <RadialBarChart
                    innerRadius="35%"
                    outerRadius="100%"
                    data={chartData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      tick={false}
                    />
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={999}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                    Frontend
                  </span>
                  <span className="font-semibold text-fuchsia-200">
                    <CountUp end={88} duration={2} />%
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    Backend
                  </span>
                  <span className="font-semibold text-indigo-200">
                    <CountUp end={82} duration={2} />%
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Database
                  </span>
                  <span className="font-semibold text-emerald-200">
                    <CountUp end={78} duration={2} />%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* marquee row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-slate-950/60 py-2 shadow-[0_0_40px_rgba(15,23,42,0.8)]"
        >
          <Marquee
            gradient
            gradientWidth={60}
            gradientColor={[15, 23, 42]}
            speed={60}
          >
            {[
              ...languageSkills,
              ...webSkills,
              ...dbSkills,
              ...platforms,
            ].map((item) => (
              <span
                key={item}
                className="mx-4 inline-flex items-center rounded-full bg-slate-900/80 px-4 py-1 text-xs font-medium text-slate-100"
              >
                {item}
              </span>
            ))}
          </Marquee>
        </motion.div>

        {/* main grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)]"
        >
          <div className="space-y-8">
            {/* Programming languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-100">
                <Code2 className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-semibold">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {languageSkills.map((lang) => (
                  <Tilt
                    key={lang}
                    glareEnable
                    glareBorderRadius="1rem"
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
                  >
                    <div className="rounded-[0.9rem] bg-slate-950/90 px-4 py-3 text-sm font-medium text-slate-100">
                      {lang}
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>

            {/* Web dev */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-100">
                <Globe2 className="h-5 w-5 text-fuchsia-400" />
                <h3 className="text-lg font-semibold">Web Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {webSkills.map((tech) => (
                  <Tilt
                    key={tech}
                    glareEnable
                    glareBorderRadius="1rem"
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
                  >
                    <div className="rounded-[0.9rem] bg-slate-950/90 px-3 py-2 text-xs font-medium text-slate-100">
                      {tech}
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-100">
                <Database className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold">Database</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dbSkills.map((tech) => (
                  <Tilt
                    key={tech}
                    glareEnable
                    glareBorderRadius="1rem"
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
                  >
                    <div className="rounded-[0.9rem] bg-slate-950/90 px-3 py-2 text-xs font-medium text-slate-100">
                      {tech}
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="space-y-6">
            {/* Version control + deploy */}
            <Card className="border-slate-700/70 bg-slate-950/80">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-indigo-400" />
                  <CardTitle className="text-base text-slate-100">
                    Version Control & Deployment
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Version Control
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Git", "GitHub"].map((item) => (
                      <Tilt
                        key={item}
                        glareEnable
                        glareBorderRadius="0.9rem"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
                      >
                        <div className="rounded-[0.9rem] bg-slate-950/90 px-3 py-2 text-xs font-medium text-slate-100">
                          {item}
                        </div>
                      </Tilt>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Deployment Platforms
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map((platform) => (
                      <Tilt
                        key={platform}
                        glareEnable
                        glareBorderRadius="0.9rem"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-[1px]"
                      >
                        <div className="rounded-[0.9rem] bg-slate-950/90 px-3 py-2 text-xs font-medium text-slate-100">
                          {platform}
                        </div>
                      </Tilt>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* links card */}
            <Card className="border-indigo-500/40 bg-slate-950/90">
              <CardContent className="space-y-4 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                      Problem Solving
                    </p>
                    <p className="text-sm text-slate-200">
                      Explore my LeetCode progress and detailed resume.
                    </p>
                  </div>
                  <Github className="hidden h-6 w-6 text-indigo-400 sm:block" />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="sm" className="w-full sm:flex-1">
                    <Link
                      to="https://leetcode.com/u/Rohan3602/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LeetCode Profile
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full border-indigo-500/60 text-indigo-100 sm:flex-1"
                  >
                    <a
                      href="/Rohan_kelaskar_Software_Developer.pdf"
                      download
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
