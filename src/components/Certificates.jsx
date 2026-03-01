import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Certificates = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";

  const certificates = [
    { label: "Datzon Internship", path: "certificates/Datzon%20Internship.pdf" },
    { label: "Edunet Foundation Internship", path: "Rohan%20Kelaskar_Certificate.pdf" },
    { label: "Devtown", path: "certificates/devtown.pdf" },
    { label: "Google Certificate", path: "certificates/Google_certificate.pdf" },
    { label: "Microsoft Certificate", path: "certificates/microsoft_certificate.pdf" },
    {
      label:
        "Career Essentials in Generative AI (Microsoft & LinkedIn)",
      path: "certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-20 px-4 sm:px-6 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-grid-slate" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Verified Learning
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Certificates
            </h2>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              A collection of{" "}
              <span className="font-semibold text-emerald-300">
                industry-recognized certifications
              </span>{" "}
              validating skills in development, cloud, and AI.
            </p>
          </div>

          <Card className="w-full max-w-sm border-emerald-500/40 bg-slate-950/90">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base text-slate-100">
                  Continuous Learning
                </CardTitle>
                <p className="text-xs text-slate-400">
                  Highlighting commitment to upskilling and staying current.
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between pt-1 text-xs text-slate-300">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                  Certificates
                </p>
                <p className="mt-1 text-lg font-semibold text-emerald-300">
                  {certificates.length}+ Verified
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[0.7rem] text-slate-400">
                  From Google, Microsoft, LinkedIn, and more.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {certificates.map((item) => (
            <Tilt
              key={item.path}
              glareEnable
              glareBorderRadius="1.4rem"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              className="h-full rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-[1px]"
            >
              <div className="flex h-full flex-col rounded-[1.3rem] bg-slate-950/95 p-5 shadow-xl shadow-emerald-900/50">
                <h3 className="mb-3 text-sm font-semibold text-slate-50">
                  {item.label}
                </h3>
                <p className="mb-4 text-xs text-slate-400">
                  Click below to open the certificate in a new tab.
                </p>
                <div className="mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-emerald-400 hover:to-indigo-500"
                  >
                    <a
                      href={`${baseUrl}${item.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
