import React from 'react';

const Certificates = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';

  const certificates = [
    { label: 'Datzon Internship', path: 'certificates/Datzon%20Internship.pdf' },
    { label: 'Edunet Foundation Internship', path: 'Rohan%20Kelaskar_Certificate.pdf' },
    { label: 'Devtown', path: 'certificates/devtown.pdf' },
    { label: 'Google Certificate', path: 'certificates/Google_certificate.pdf' },
    { label: 'Microsoft Certificate', path: 'certificates/microsoft_certificate.pdf' },
    { label: 'Career Essentials in Generative AI (Microsoft & LinkedIn)', path: 'certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf' },
  ];

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((item) => (
            <div key={item.path} className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.label}</h3>
              <div className="flex-1" />
              <a
                href={`${baseUrl}${item.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-indigo-600 hover:to-fuchsia-600 transition text-sm text-center"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;


