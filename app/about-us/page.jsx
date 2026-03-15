import React from 'react';

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — mobile first */}
      <section className="relative bg-gradient-to-b from-emerald-700 to-emerald-800 px-4 py-12 text-white sm:py-16 md:py-24 md:px-8 safe-area-padding-x">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3">
            About IQAS
          </h1>
          <p className="text-lg font-medium text-emerald-100 sm:text-xl md:text-2xl">
            The Best Manufacturer in Nashik
          </p>
        </div>
      </section>

      {/* Main content — mobile first */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:py-10 md:px-8 md:py-16 safe-area-padding-x">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-4 text-gray-700 leading-relaxed sm:space-y-6 text-[15px] sm:text-base">
            <p>
              On 31 Aug 2004 at Melbourne Australia, the thought provoked in mind for the welfare of our farmers working in India with the aim to empower their lives by empowering Indian Agriculture. (Registered in India on the 22 Aug 2017). Our Visionary Leader <strong className="text-emerald-800">Mr. V Borole</strong>, a pharma businessman (met at IRE Australia, 2004).
            </p>
            <p>
              He owns family business of Pharma in UK and locally belongs Pune, Maharashtra. He is basically a Pharma graduate and further studied in UK. He decided to work on how to increase farmers&apos; income and export and give quick Agri solutions to them.
            </p>
          </div>
        </div>

        {/* About Company */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-xl font-semibold text-emerald-800 sm:text-2xl mb-4 sm:mb-5">
            About Company
          </h2>
          <p className="text-lg font-medium text-gray-800 mb-4 sm:mb-5">
            The Best Manufacturers Of Bio-organics Agri Inputs
          </p>
          <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] sm:text-base">
            <p>
              We at <strong className="text-emerald-800">IQAS Integrated Quick Agri Solutions Pvt. Ltd.</strong> are a fast-scaling agri-inputs company based in Nashik, Maharashtra. Since our inception in 2017, we&apos;ve experienced an average year-over-year growth of 75%, driven by our commitment to delivering innovative and sustainable crop-input solutions to farmers across India.
            </p>
            <p>
              IQAS manufactures and supplies a comprehensive range of high-impact agricultural products, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Soil structure stabilizers and water retention enhancers</li>
              <li>Fish oil-based formulations</li>
              <li>Nano-fertilizers, biopesticides, and biostimulants</li>
            </ul>
          </div>
        </div>

        {/* Series B+ focus card */}
        <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 p-4 sm:mt-12 sm:p-6 md:mt-16 md:p-8">
          <h2 className="text-lg font-semibold text-emerald-800 sm:text-xl mb-3 sm:mb-4">
            As we prepare to raise our Series B+ round, our focus is on:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed text-[15px] sm:text-base">
            <li>Scaling manufacturing and distribution capacity across underserved regions</li>
            <li>Expanding our leadership team across R&D, sales, and operations</li>
            <li>Investing in tech-integrated advisory platforms for better farmer engagement</li>
            <li>Accessing global markets and improving farmer unit economics</li>
          </ul>
        </div>

        {/* Mission highlight card */}
        <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 p-4 sm:mt-12 sm:p-6 md:mt-16 md:p-8">
          <h2 className="text-lg font-semibold text-emerald-800 sm:text-xl mb-3 sm:mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
            To empower Indian agriculture and farmers through quality agri solutions, increased income opportunities, and faster access to effective products—backed by decades of pharma and agri expertise.
          </p>
        </div>
      </section>

      <div className="h-1 bg-emerald-700" aria-hidden="true" />
    </main>
  );
};

export default AboutUsPage;
