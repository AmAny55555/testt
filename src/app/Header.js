"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-[#051d34]/80 px-[6%] py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src="/icone.png" width={50} height={50} alt="logo" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {[
            "home",
            "about",
            "services",
            "portofolio",
            "packages",
            "clients",
            "contact",
          ].map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className="capitalize hover:text-[#21c6f5] transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white  text-[#051d34]/80 px-2 py-4 rounded-lg shadow-md">
          {[
            "home",
            "about",
            "services",
            "portofolio",
            "packages",
            "clients",
            "contact",
          ].map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className="capitalize border-b border-white/20 pb-2 hover:text-[#21c6f5] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
