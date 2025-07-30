"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // icons للمنيو

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#002d62] text-[#8e98af] px-[6%] py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src="/brand.png" width={50} height={50} alt="logo" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {[
            "home",
            "About",
            "services",
            "portofolio",
            "packages",
            "clients",
            "contact",
          ].map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className="hover:text-orange-500 capitalize"
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
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {[
            "home",
            "About",
            "services",
            "portofolio",
            "packages",
            "clients",
            "contact",
          ].map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className="hover:text-orange-500 capitalize border-b border-gray-600 pb-2"
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
