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
    { label: 'Essential Business Communication Skills (LinkedIn Learning)', path: 'certificates/CertificateOfCompletion_Essential Business Communication Skills Professional Certificate by LinkedIn Learning.pdf' },
  ];

  return (
    <section id="certificates" className="min-h-screen bg-gray-100 py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((item) => (
            <div key={item.path} className="bg-white p-5 rounded-lg shadow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.label}</h3>
              <div className="flex-1" />
              <a
                href={`${baseUrl}${item.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 underline"
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


