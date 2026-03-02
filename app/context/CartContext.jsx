'use client';

import React, { createContext, useContext, useReducer, useMemo } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const { item, quantity = 1 } = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      const items = existing
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
          )
        : [...state.items, { ...item, quantity }];
      return { items };
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.id !== action.payload.id) };
    case 'UPDATE_QTY': {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        return { items: state.items.filter((i) => i.id !== id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
};

const initialState = { items: [] };

function loadInitialState() {
  if (typeof window === 'undefined') return initialState;
  try {
    const saved = localStorage.getItem('iqas-cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed?.items)) return { items: parsed.items };
    }
  } catch (_) {}
  return initialState;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, loadInitialState);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && state.items.length >= 0) {
      localStorage.setItem('iqas-cart', JSON.stringify({ items: state.items }));
    }
  }, [state.items]);

  const addToCart = (item, quantity = 1) => {
    dispatch({
      type: 'ADD',
      payload: {
        item: {
          id: item.id,
          name: item.name,
          imagePath: item.imagePath,
          price: item.price,
        },
        quantity,
      },
    });
  };

  const removeFromCart = (id) => dispatch({ type: 'REMOVE', payload: { id } });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: 'UPDATE_QTY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const totalAmount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );
  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalAmount,
      totalItems,
    }),
    [state.items, totalAmount, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
