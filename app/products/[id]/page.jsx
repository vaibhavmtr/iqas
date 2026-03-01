import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProductById,
  getProductIds,
  getSimilarProducts,
} from '@/app/data/products';
import { SimilarProductsSlider } from '@/app/components/SimilarProductsSlider';

export async function generateStaticParams() {
  return getProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | IQAS Agri`,
    description: product.description,
    ...(product.keywords && { keywords: product.keywords }),
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-8 lg:px-8 safe-area-padding-x">
        <Link
          href="/"
          className="mb-4 inline-flex min-h-[44px] items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg sm:mb-6"
        >
          ← Back to products
        </Link>

        <article className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm md:flex md:flex-row">
          <div className="relative aspect-square w-full shrink-0 bg-emerald-50 md:aspect-4/3 md:w-1/2 lg:w-2/5">
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="object-contain p-4 sm:p-6 md:p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-1 flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-2xl font-bold tracking-tight text-emerald-900 sm:text-3xl md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-emerald-800/90 sm:mt-4 sm:text-lg">
              {product.description}
            </p>

            <section className="mt-6 sm:mt-8" aria-labelledby="key-features-heading">
              <h2
                id="key-features-heading"
                className="text-lg font-semibold text-emerald-900 sm:text-xl"
              >
                Key Features
              </h2>
              <ul className="mt-2 space-y-2 sm:mt-3" role="list">
                {product.keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-emerald-800/90 sm:text-base"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                      aria-hidden
                    />
                    <span className="wrap-break-word">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {(product.usageApplication ||
              product.packagingSize ||
              product.form ||
              product.packagingType ||
              product.targetCrops) && (
              <section
                className="mt-6 sm:mt-8"
                aria-labelledby="product-details-heading"
              >
                <h2
                  id="product-details-heading"
                  className="text-lg font-semibold text-emerald-900 sm:text-xl"
                >
                  Product Details
                </h2>
                <dl className="mt-2 grid gap-2 sm:mt-3 sm:grid-cols-2">
                  {product.usageApplication && (
                    <>
                      <dt className="font-medium text-emerald-800 text-sm sm:text-base">Usage/Application</dt>
                      <dd className="text-emerald-800/90 text-sm sm:text-base wrap-break-word">{product.usageApplication}</dd>
                    </>
                  )}
                  {product.packagingSize && (
                    <>
                      <dt className="font-medium text-emerald-800 text-sm sm:text-base">Packaging Size</dt>
                      <dd className="text-emerald-800/90 text-sm sm:text-base">{product.packagingSize}</dd>
                    </>
                  )}
                  {product.form && (
                    <>
                      <dt className="font-medium text-emerald-800 text-sm sm:text-base">Form</dt>
                      <dd className="text-emerald-800/90 text-sm sm:text-base">{product.form}</dd>
                    </>
                  )}
                  {product.packagingType && (
                    <>
                      <dt className="font-medium text-emerald-800 text-sm sm:text-base">Packaging Type</dt>
                      <dd className="text-emerald-800/90 text-sm sm:text-base">{product.packagingType}</dd>
                    </>
                  )}
                  {product.targetCrops && (
                    <>
                      <dt className="font-medium text-emerald-800 text-sm sm:text-base">Target Crops</dt>
                      <dd className="text-emerald-800/90 text-sm sm:text-base wrap-break-word">{product.targetCrops}</dd>
                    </>
                  )}
                </dl>
              </section>
            )}

            {product.keywords && (
              <p className="mt-4 text-xs text-emerald-700/80 sm:mt-6 sm:text-sm wrap-break-word">
                <span className="font-medium">Keywords: </span>
                {product.keywords}
              </p>
            )}

            <div className="mt-6 sm:mt-8">
              <Link
                href="/contact-us"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98]"
              >
                Enquire about {product.name}
              </Link>
            </div>
          </div>
        </article>

        <SimilarProductsSlider products={getSimilarProducts(id)} />
      </div>
    </div>
  );
}
