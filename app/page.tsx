import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from './data/products';

function ProductsListing() {
  return (
    <section className="w-full bg-white py-16 md:py-20" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="products-heading" className="text-center text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
          Our Products
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-emerald-700/90">
          Quality agri solutions for Indian agriculture
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="block focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
              >
                <article className="group flex flex-col overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-emerald-50">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold text-emerald-900">{product.name}</h3>
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
      {/* Hero section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden md:min-h-[80vh]">
        <Image
          src="/assets/images/banner.avif"
          alt="IQAS Agri - Empowering Indian Agriculture"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-emerald-900/50" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-md md:text-5xl lg:text-6xl">
            IQAS Agri
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-emerald-100 drop-shadow md:text-xl lg:text-2xl">
            Empowering Indian agriculture through quality agri solutions
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about-us"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-emerald-800 shadow-lg transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900"
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
