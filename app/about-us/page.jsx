import React from 'react';

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative bg-linear-to-b from-emerald-700 to-emerald-800 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            About IQAS
          </h1>
          <p className="text-xl md:text-2xl font-medium text-emerald-100">
            The Best Manufacturer in Nashik
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              On 31 Aug 2004 at Melbourne Australia, the thought provoked in mind for the welfare of our farmers working in India with the aim to empower their lives by empowering Indian Agriculture. (Registered in India on the 22 Aug 2017). Our Visionary Leader <strong className="text-emerald-800">Mr. V Borole</strong>, a pharma businessman (met at IRE Australia, 2004).
            </p>
            <p>
              He owns family business of Pharma in UK and locally belongs Pune, Maharashtra. He is basically a Pharma graduate and further studied in UK. He decided to work on how to increase farmers&apos; income and export and give quick Agri solutions to them.
            </p>
          </div>
        </div>

        {/* Highlight card */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-xl bg-emerald-50 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To empower Indian agriculture and farmers through quality agri solutions, increased income opportunities, and faster access to effective products—backed by decades of pharma and agri expertise.
          </p>
        </div>
      </section>

      {/* Footer accent */}
      <div className="h-1 bg-emerald-700" aria-hidden="true" />
    </main>
  );
};

export default AboutUsPage;
