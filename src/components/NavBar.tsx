"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/#contact" },
    { name: "About Us", href: "/#about" },
  ];

  return (
    <header className="fixed top-0 left-3 right-3 z-50 bg-white/95 backdrop-blur-sm shadow-sm my-2 rounded-xl border border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={52}
            height={52}
            className="object-contain group-hover:scale-105 transition-transform duration-200 "
          />
          <span className="md:text-2xl text-lg font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            LINUS TECH TIPS REVIEW
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/categories"
            className="group bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow-md"
          >
            Tech Categories
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 pt-1 space-y-1 border-t border-gray-100">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/categories"
            onClick={() => setIsOpen(false)}
            className="group bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 text-sm font-medium mt-1"
          >
            All Tech Categories
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
