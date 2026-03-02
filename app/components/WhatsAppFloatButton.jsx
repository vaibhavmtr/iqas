'use client';

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../constants/contact';

const WhatsAppFloatButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 active:scale-95"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden />
    </Link>
  );
};

export default WhatsAppFloatButton;
