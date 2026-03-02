'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi2';

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }
    if (window.Razorpay) {
      resolve(window.Razorpay);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(window.Razorpay);
    script.onerror = () => resolve(null);
    document.body.appendChild(script);
  });
}

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalAmount, totalItems } =
    useCart();
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState(null);
  const [paySuccess, setPaySuccess] = useState(false);

  const handlePayNow = async () => {
    if (totalAmount <= 0) return;
    setPayError(null);
    setPayLoading(true);
    try {
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalAmount }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPayError(data.error || 'Failed to create order');
        return;
      }
      const Razorpay = await loadRazorpayScript();
      if (!Razorpay) {
        setPayError('Payment script failed to load');
        return;
      }
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!keyId) {
        setPayError('Razorpay key not configured');
        return;
      }
      const options = {
        key: keyId,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: 'IQAS Agri',
        description: 'Agri products order',
        handler: async function (response) {
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyRes.ok && verifyData.success) {
            clearCart();
            setPaySuccess(true);
          } else {
            setPayError(verifyData.error || 'Payment verification failed');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: { color: '#047857' },
      };
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', () => {
        setPayError('Payment failed or was cancelled');
      });
      rzp.open();
    } catch (err) {
      setPayError(err.message || 'Something went wrong');
    } finally {
      setPayLoading(false);
    }
  };

  if (paySuccess) {
    return (
      <main className="min-h-screen bg-emerald-50 px-4 py-12 safe-area-padding-x">
        <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm border border-emerald-100">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-emerald-900">Payment successful</h1>
          <p className="mt-2 text-emerald-700">Thank you for your order. We will contact you shortly.</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0 && !payLoading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12 safe-area-padding-x">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
          <p className="mt-2 text-slate-600">Add products from the home or product pages.</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Browse products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-24 pt-6 safe-area-padding-x md:pb-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-slate-900">Cart ({totalItems} items)</h1>

        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-emerald-50">
                <Image
                  src={item.imagePath}
                  alt={item.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">₹{item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                    aria-label="Decrease quantity"
                  >
                    <HiMinus className="h-4 w-4" />
                  </button>
                  <span className="min-w-6 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                    aria-label="Increase quantity"
                  >
                    <HiPlus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
                    aria-label="Remove"
                  >
                    <HiTrash className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="shrink-0 font-semibold text-slate-900">
                ₹{item.price * item.quantity}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex justify-between text-lg font-semibold text-slate-900">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
          {payError && (
            <p className="mt-3 text-sm text-red-600">{payError}</p>
          )}
          <button
            type="button"
            onClick={handlePayNow}
            disabled={payLoading || totalAmount <= 0}
            className="mt-4 w-full rounded-xl bg-emerald-600 py-3.5 font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {payLoading ? 'Opening…' : 'Pay now with Razorpay'}
          </button>
        </div>
      </div>
    </main>
  );
}
