'use client';

import React from 'react';
import { CartProvider } from '@/app/context/CartContext';

export function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
