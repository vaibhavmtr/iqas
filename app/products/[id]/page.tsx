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
import { AddToCartButton } from '@/app/components/AddToCartButton';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | IQAS Agri`,
    description: product.description,
    ...(product.keywords && { keywords: product.keywords }),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          ← Back to products
        </Link>

        <article className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm md:flex md:flex-row">
          <div className="relative aspect-square w-full shrink-0 bg-emerald-50 md:aspect-4/3 md:w-1/2 lg:w-2/5">
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="object-contain p-6 md:p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-emerald-800/90">
              {product.description}
            </p>

            <section className="mt-8" aria-labelledby="key-features-heading">
              <h2
                id="key-features-heading"
                className="text-xl font-semibold text-emerald-900"
              >
                Key Features
              </h2>
              <ul className="mt-3 space-y-2" role="list">
                {product.keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-emerald-800/90"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                      aria-hidden
                    />
                    <span>{feature}</span>
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
                className="mt-8"
                aria-labelledby="product-details-heading"
              >
                <h2
                  id="product-details-heading"
                  className="text-xl font-semibold text-emerald-900"
                >
                  Product Details
                </h2>
                <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                  {product.usageApplication && (
                    <>
                      <dt className="font-medium text-emerald-800">
                        Usage/Application
                      </dt>
                      <dd className="text-emerald-800/90">
                        {product.usageApplication}
                      </dd>
                    </>
                  )}
                  {product.packagingSize && (
                    <>
                      <dt className="font-medium text-emerald-800">
                        Packaging Size
                      </dt>
                      <dd className="text-emerald-800/90">
                        {product.packagingSize}
                      </dd>
                    </>
                  )}
                  {product.form && (
                    <>
                      <dt className="font-medium text-emerald-800">Form</dt>
                      <dd className="text-emerald-800/90">{product.form}</dd>
                    </>
                  )}
                  {product.packagingType && (
                    <>
                      <dt className="font-medium text-emerald-800">
                        Packaging Type
                      </dt>
                      <dd className="text-emerald-800/90">
                        {product.packagingType}
                      </dd>
                    </>
                  )}
                  {product.targetCrops && (
                    <>
                      <dt className="font-medium text-emerald-800">
                        Target Crops
                      </dt>
                      <dd className="text-emerald-800/90">
                        {product.targetCrops}
                      </dd>
                    </>
                  )}
                </dl>
              </section>
            )}

            {product.keywords && (
              <p className="mt-6 text-sm text-emerald-700/80">
                <span className="font-medium">Keywords: </span>
                {product.keywords}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AddToCartButton product={product} />
              <Link
                href="/cart"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-emerald-700 px-6 py-3.5 text-base font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98]"
              >
                View cart
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-emerald-700 px-6 py-3.5 text-base font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98]"
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
