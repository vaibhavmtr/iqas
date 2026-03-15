'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { HiShoppingCart } from 'react-icons/hi2';

export function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!product?.id || product.price == null) return;
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product?.price) return null;

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 hover:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-[0.98]"
    >
      <HiShoppingCart className="h-5 w-5" aria-hidden />
      {added ? 'Added to cart' : 'Add to cart'} — ₹{product.price}
    </button>
  );
}
