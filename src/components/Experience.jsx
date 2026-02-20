import React from 'react';

const Experience = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">Experience</h2>

        <div className="space-y-8">

          {/* Experience 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-800">Frontend Developer Intern</h3>
            <p className="text-gray-600 italic">Datzon Technologies · June 2025 – October 2025</p>
            <ul className="mt-3 list-disc list-inside text-gray-700 leading-relaxed">
              <li>Built responsive UI components using React.js and Tailwind CSS.</li>
              <li>Collaborated on dashboard and modal systems using reusable layouts.</li>
              <li>Integrated REST APIs and handled client-side authentication flows.</li>
            </ul>
            <div className="mt-4">
              <a
                href={`${baseUrl}Datzon%20Internship.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 hover:text-indigo-700 underline"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-800">Full Stack Developer Intern</h3>
            <p className="text-gray-600 italic">Edunet Foundation, in collaboration with EY GDS & AICTE   · Feb 2025 – Mar 2025</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 leading-relaxed">
  <li>Built "Vintage Bids" auction web app using the MERN stack and Bootstrap.</li>
  <li>Developed core features like bidding system, user authentication, and real-time updates.</li>
</ul>
            <div className="mt-4">
              <a
                href={`${baseUrl}Rohan%20Kelaskar_Certificate.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 hover:text-indigo-700 underline"
              >
                View Certificate
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
