import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Experience = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-35 bg-grid-slate" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Professional Journey
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Experience
            </h2>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Hands-on internships where I{" "}
              <span className="font-semibold text-indigo-300">
                built real products, collaborated with teams,
              </span>{" "}
              and shipped features used by actual users.
            </p>
          </div>

          <Card className="w-full max-w-sm border-indigo-500/40 bg-slate-950/90">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base text-slate-100">
                  Internship Snapshot
                </CardTitle>
                <p className="text-xs text-slate-400">
                  Frontend and full stack roles focused on modern web stacks.
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between pt-1 text-xs text-slate-300">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                  Internships
                </p>
                <p className="mt-1 text-lg font-semibold text-indigo-300">
                  2
                </p>
              </div>
              <p className="max-w-[9rem] text-[0.7rem] text-slate-400">
                Experience with dashboards, authentication, and scalable
                backends.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <Tilt
            glareEnable
            glareBorderRadius="1.5rem"
            tiltMaxAngleX={14}
            tiltMaxAngleY={14}
            className="h-full rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-[1px]"
          >
            <div className="flex h-full flex-col rounded-[1.4rem] bg-slate-950/95 p-6 shadow-xl shadow-indigo-900/60">
              <h3 className="text-lg font-semibold text-slate-50">
                Frontend Developer Intern
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Datzon Technologies · June 2025 – October 2025
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>
                  Built responsive UI components using React.js and Tailwind
                  CSS.
                </li>
                <li>
                  Collaborated on dashboard and modal systems using reusable
                  layouts.
                </li>
                <li>
                  Integrated REST APIs and handled client-side authentication
                  flows.
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-indigo-500/60 text-indigo-100"
                >
                  <a
                    href={`${baseUrl}Datzon%20Internship.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Offer Letter
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-indigo-500/60 text-indigo-100"
                >
                  <a
                    href={`${baseUrl}Datzon%20Internship2.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Completion
                  </a>
                </Button>
              </div>
            </div>
          </Tilt>

          <Tilt
            glareEnable
            glareBorderRadius="1.5rem"
            tiltMaxAngleX={14}
            tiltMaxAngleY={14}
            className="h-full rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-[1px]"
          >
            <div className="flex h-full flex-col rounded-[1.4rem] bg-slate-950/95 p-6 shadow-xl shadow-indigo-900/60">
              <h3 className="text-lg font-semibold text-slate-50">
                Full Stack Developer Intern
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Edunet Foundation, in collaboration with EY GDS &amp; AICTE ·
                Feb 2025 – Mar 2025
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>
                  Built &quot;Vintage Bids&quot; auction web app using the MERN
                  stack and Bootstrap.
                </li>
                <li>
                  Developed core features like bidding system, user
                  authentication, and real-time updates.
                </li>
              </ul>
              <div className="mt-5">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-indigo-500/60 text-indigo-100"
                >
                  <a
                    href={`${baseUrl}Rohan%20Kelaskar_Certificate.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
