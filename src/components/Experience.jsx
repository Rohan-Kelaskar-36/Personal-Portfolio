import React from 'react';

const Experience = () => (
  <section id="experience" className="min-h-screen bg-gray-100 py-20 px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

      <div className="space-y-8">

        {/* Experience 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800">Frontend Developer Intern</h3>
          <p className="text-gray-600 italic">Datzon Technologies · June 2025 – Present</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 leading-relaxed">
            <li>Built responsive UI components using React.js and Tailwind CSS.</li>
            <li>Collaborated on dashboard and modal systems using reusable layouts.</li>
            <li>Integrated REST APIs and handled client-side authentication flows.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-800">Full Stack Developer Intern</h3>
          <p className="text-gray-600 italic">Edunet Foundation, in collaboration with EY GDS & AICTE   · Feb 2025 – Mar 2025</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 leading-relaxed">
            <li>Delivered full stack MERN-based apps like book stores, auction systems, and billing tools.</li>
            <li>Handled deployment using Vercel, Render, and Netlify with CI/CD pipelines.</li>
            <li>Worked directly with clients to gather requirements and deliver MVPs.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
);

export default Experience;
