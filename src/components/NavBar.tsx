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
    <header className="fixed top-0 left-7 right-7 z-50 bg-white shadow-md my-2 rounded-lg hover:shadow-2xl ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="OpticOdds Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="md:text-5xl text-2xl font-bold text-violet-600 hover:text-blue-500 active:text-blue-500 ">NEEOTECH</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-white  hover:bg-blue-500  hover:rounded-lg  transition-colors duration-200 hover:scale-110 p-3"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
     <div className="hidden md:block">
  <Link
    href="/videos"
    className="group bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-2xl flex items-center gap-2 whitespace-nowrap  hover:scale-110"
  >
    All places to visit
    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-5" />
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-white hover:bg-blue-500 p-2 hover:scale-105 hover:rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/videos"
              onClick={() => setIsOpen(false)}
              className="group bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-2xl flex items-center gap-2 whitespace-nowrap  "
  >
    All places to visit
    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-5 hover:Scale-155" />
            
             
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
