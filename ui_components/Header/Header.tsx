"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { images } from "@/utils/index";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-gray-800 fixed z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={images.icon}
            alt="CloudThinker Logo"
            width={180}
            height={40}
            priority
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <Link href="#" className="hover:text-white">Pricing</Link>
          <Link href="#" className="hover:text-white">Documents</Link>
          <Link href="#" className="hover:text-white">Blog</Link>
          <Link href="#" className="hover:text-white">Contact Us</Link>
          <Link href="#" className="hover:text-white">Services</Link>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="w-20 h-9 flex items-center justify-center rounded-xl text-white text-sm font-medium hover:opacity-90 transition"
          >
            Log in
          </Link>

          <Link
            href="#"
            className="w-20 h-9 flex items-center justify-center rounded-xl text-black text-sm font-medium bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)] hover:opacity-90 transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center gap-6 py-6 text-gray-300">
            <Link href="#" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="#" onClick={() => setOpen(false)}>Documents</Link>
            <Link href="#" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="#" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link href="#" onClick={() => setOpen(false)}>Services</Link>

            <div className="flex flex-col gap-4 mt-4 w-full px-8">
              <Link
                href="#"
                className="w-full h-10 flex items-center justify-center rounded-xl text-white border border-gray-700"
              >
                Log in
              </Link>

              <Link
                href="#"
                className="w-full h-10 flex items-center justify-center rounded-xl text-black font-medium bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)]"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
