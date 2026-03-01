'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

export interface SimilarProductItem {
  id: string;
  name: string;
  imagePath: string;
}

interface SimilarProductsSliderProps {
  products: SimilarProductItem[];
}

export function SimilarProductsSlider({ products }: SimilarProductsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const hasScrollLeft = scrollLeft > 2;
    const hasScrollRight = scrollLeft < scrollWidth - clientWidth - 2;
    setCanScrollLeft(hasScrollLeft);
    setCanScrollRight(hasScrollRight);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateScrollState);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [products.length]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    const step = direction === 'left' ? -scrollAmount : scrollAmount;
    const newScrollLeft = el.scrollLeft + step;
    el.scrollTo({
      left: Math.max(
        0,
        Math.min(newScrollLeft, el.scrollWidth - el.clientWidth)
      ),
      behavior: 'smooth',
    });
    setTimeout(updateScrollState, 400);
  };

  if (products.length === 0) return null;

  return (
    <section
      className="mt-16 border-t border-emerald-100 pt-12"
      aria-labelledby="similar-products-heading"
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          id="similar-products-heading"
          className="text-2xl font-bold tracking-tight text-emerald-900"
        >
          Similar Products
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            onMouseDown={(e) => e.preventDefault()}
            disabled={!canScrollLeft}
            aria-label="Previous products"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 hover:border-emerald-300 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <HiChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            onMouseDown={(e) => e.preventDefault()}
            disabled={!canScrollRight}
            aria-label="Next products"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 hover:border-emerald-300 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <HiChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-6 w-full min-w-0 overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-6 overflow-x-auto overflow-y-hidden pb-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'thin' }}
        >
          {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group flex min-w-[260px] max-w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden bg-emerald-50">
              <Image
                src={product.imagePath}
                alt={product.name}
                width={260}
                height={195}
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span className="text-lg font-semibold text-emerald-900 group-hover:text-emerald-700">
                {product.name}
              </span>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
