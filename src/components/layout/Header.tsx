"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom flex justify-end space-x-6">
          <a
            href="mailto:info@absolutelaser.ca"
            className="flex items-center hover:text-secondary transition-colors duration-200"
          >
            <Mail className="w-4 h-4 mr-2" />
            info@absolutelaser.ca
          </a>
          <a
            href="tel:(416)7495050"
            className="flex items-center hover:text-secondary transition-colors duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            (416) 749 5050
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-md">
        <div className="container-custom flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-64">
              <Image
                src="/images/logo.jpg"
                alt="Absolute Laser"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-primary hover:text-secondary font-medium transition-colors duration-200">Home</Link>
            <Link href="/about-us" className="text-primary hover:text-secondary font-medium transition-colors duration-200">About Us</Link>
            <div className="relative group">
              <Link href="/services" className="text-primary hover:text-secondary font-medium transition-colors duration-200 flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-lg py-2">
                  <Link href="/services/cnc-laser-cutting" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">CNC Laser Cutting</Link>
                  <Link href="/services/cnc-machining" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">CNC Machining</Link>
                  <Link href="/services/cnc-turning" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">CNC Turning</Link>
                  <Link href="/services/punching" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">Punching</Link>
                  <Link href="/services/forming" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">Forming (Press Brake)</Link>
                  <Link href="/services/finishing" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">Finishing</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/capability" className="text-primary hover:text-secondary font-medium transition-colors duration-200 flex items-center">
                Capability
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-lg py-2">
                  <Link href="/capability/sheet-laser-cutting" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">Sheet Laser Cutting</Link>
                  <Link href="/capability/tube-laser-cutting" className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white">Tube Laser Cutting</Link>
                </div>
              </div>
            </div>
            <Link href="/products" className="text-primary hover:text-secondary font-medium transition-colors duration-200">Products</Link>
            <Link href="/careers" className="text-primary hover:text-secondary font-medium transition-colors duration-200">Careers</Link>
            <Link href="/news" className="text-primary hover:text-secondary font-medium transition-colors duration-200">News</Link>
            <div className="relative group">
              <Link href="/solar-panel" className="text-primary hover:text-secondary font-medium transition-colors duration-200 flex items-center">
                Solar Panel
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <Link href="/ev-charger" className="text-primary hover:text-secondary font-medium transition-colors duration-200">EV Charger</Link>
            <Link href="/electrical-work" className="text-primary hover:text-secondary font-medium transition-colors duration-200">Electrical Work</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-white shadow-lg lg:hidden">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>Home</Link>
              <Link href="/about-us" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>About Us</Link>

              <details className="group">
                <summary className="flex items-center justify-between text-primary hover:text-secondary font-medium transition-colors duration-200 cursor-pointer">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link href="/services/cnc-laser-cutting" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>CNC Laser Cutting</Link>
                  <Link href="/services/cnc-machining" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>CNC Machining</Link>
                  <Link href="/services/cnc-turning" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>CNC Turning</Link>
                  <Link href="/services/punching" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>Punching</Link>
                  <Link href="/services/forming" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>Forming (Press Brake)</Link>
                  <Link href="/services/finishing" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>Finishing</Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between text-primary hover:text-secondary font-medium transition-colors duration-200 cursor-pointer">
                  Capability
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <Link href="/capability/sheet-laser-cutting" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>Sheet Laser Cutting</Link>
                  <Link href="/capability/tube-laser-cutting" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>Tube Laser Cutting</Link>
                </div>
              </details>

              <Link href="/products" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>Products</Link>
              <Link href="/careers" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>Careers</Link>
              <Link href="/news" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>News</Link>

              <details className="group">
                <summary className="flex items-center justify-between text-primary hover:text-secondary font-medium transition-colors duration-200 cursor-pointer">
                  Solar Panel
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 pl-4">
                  <Link href="/solar-panel" className="text-primary hover:text-secondary text-sm" onClick={toggleMenu}>Solar Panel</Link>
                </div>
              </details>

              <Link href="/ev-charger" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>EV Charger</Link>
              <Link href="/electrical-work" className="text-primary hover:text-secondary font-medium transition-colors duration-200" onClick={toggleMenu}>Electrical Work</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
