import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from './data/products';

function ProductsListing() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-14 md:py-20"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="products-heading"
          className="text-center text-2xl font-bold tracking-tight text-emerald-900 sm:text-3xl md:text-4xl"
        >
          Our Products
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-base text-emerald-700/90 sm:mt-3 sm:text-lg">
          Quality agri solutions for Indian agriculture
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:mt-12 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98] transition-transform"
              >
                <article className="group flex flex-col overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-emerald-50">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-105 sm:p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <h3 className="text-base font-semibold text-emerald-900 sm:text-lg">
                      {product.name}
                    </h3>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero — mobile first */}
      <section className="relative min-h-[60vh] w-full overflow-hidden sm:min-h-[70vh] md:min-h-[80vh]">
        <Image
          src="/assets/images/banner.avif"
          alt="IQAS Agri - Empowering Indian Agriculture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-emerald-900/50" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white safe-area-padding-x">
          <h1 className="text-3xl font-bold tracking-tight drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
            IQAS Agri
          </h1>
          <p className="mt-3 max-w-2xl text-base font-medium text-emerald-100 drop-shadow sm:mt-4 sm:text-lg md:text-xl lg:text-2xl">
            Empowering Indian agriculture through quality agri solutions
          </p>
          <div className="mt-6 flex w-full max-w-sm flex-col gap-3 px-2 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/about-us"
              className="min-h-[48px] flex flex-1 items-center justify-center rounded-xl bg-white px-5 py-3.5 text-base font-semibold text-emerald-800 shadow-lg transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900 active:scale-[0.98] sm:flex-none sm:rounded-lg sm:px-6"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="min-h-[48px] flex flex-1 items-center justify-center rounded-xl border-2 border-white px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900 active:scale-[0.98] sm:flex-none sm:rounded-lg sm:px-6"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ProductsListing />
    </div>
  );
}
