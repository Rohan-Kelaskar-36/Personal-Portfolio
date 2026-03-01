import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-16 sm:px-6 md:px-10"
  >
    {/* background grid + glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.35),_transparent_55%)]" />
      <div className="absolute inset-0 opacity-40 bg-grid-slate [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
    </div>

    <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)]">
      {/* text column */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-8 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1 text-xs font-medium text-slate-200 shadow-lg shadow-slate-900/60 backdrop-blur">
          <Sparkles className="h-3 w-3 text-indigo-400" />
          <span>Full Stack Developer · MERN · TypeScript</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Rohan Kelaskar
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-base text-slate-300 sm:text-lg md:text-xl">
            A passionate{" "}
            <span className="font-semibold text-fuchsia-300">
              Full Stack Developer
            </span>{" "}
            crafting responsive, scalable applications with modern web
            technologies.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid w-full max-w-xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            <Button asChild size="lg" className="w-full">
              <a href="#projects" className="flex items-center justify-center gap-2">
                Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <a href="#experience" className="flex items-center justify-center gap-2">
                Experience
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <a href="#certificates" className="flex items-center justify-center gap-2">
                Certificates
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full">
              <a href="#contact" className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300 sm:justify-start">
          <div className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1">
            React.js · Express.js  · TypeScript · Node.js · MongoDB
          </div>
          <div className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1">
            Tailwind CSS · REST APIs · Bootstrap
          </div>
        </div>
      </motion.div>

      {/* 3D card column */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="flex justify-center"
      >
        <Tilt
          glareEnable
          glarePosition="all"
          glareBorderRadius="1.5rem"
          glareColor="rgba(129,140,248,0.35)"
          tiltMaxAngleX={18}
          tiltMaxAngleY={18}
          className="w-full max-w-md rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-[1px] shadow-[0_0_60px_rgba(129,140,248,0.35)]"
        >
          <div className="h-full w-full rounded-[1.4rem] bg-slate-950/90 p-6 sm:p-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-xs font-medium tracking-wide text-indigo-300 uppercase">
                Portfolio Snapshot
              </p>
              <p className="text-sm text-slate-300">
                Turning complex ideas into clean, production-ready experiences
                across the stack.
              </p>

              <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3">
                  <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Experience
                  </p>
                  <p className="mt-1 text-lg font-semibold text-indigo-300">
                    2
                  </p>
                  <p className="text-[0.65rem] text-slate-400">
                    Internships
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3">
                  <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Projects
                  </p>
                  <p className="mt-1 text-lg font-semibold text-fuchsia-300">
                    6+
                  </p>
                  <p className="text-[0.65rem] text-slate-400">
                    Full-stack
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3">
                  <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Certificates
                  </p>
                  <p className="mt-1 text-lg font-semibold text-emerald-300">
                    4+
                  </p>
                  <p className="text-[0.65rem] text-slate-400">
                    Verified
                  </p>
                </div>
              </div>

              
            </motion.div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  </section>
);

export default Hero;
