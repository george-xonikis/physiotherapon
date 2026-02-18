"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Αρχική" },
  { href: "/#about", label: "Σχετικά" },
  { href: "/#therapies", label: "Θεραπείες" },
  { href: "/#services", label: "Μηχανήματα" },
  { href: "/#gallery", label: "Ο Χώρος Μας" },
  { href: "/#doctors", label: "Φυσικοθεραπευτές" },
  { href: "/#location", label: "Σημείο" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[997] transition-all duration-500 px-4 py-4 ${
        scrolled ? "shadow-md" : ""
      } bg-green-main`}
    >
      <div className="container mx-auto flex items-center">
        <Link href="/" className="mr-auto">
          <Image
            src="/images/logo2.png"
            alt="Physiotherapon"
            width={80}
            height={80}
            className="max-h-[80px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex list-none m-0 p-0 items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="pl-5">
                <Link
                  href={link.href}
                  className="text-white text-sm border-b-2 border-white pb-1 px-0.5 transition-colors duration-300 hover:text-oil hover:border-oil"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#contact"
          className="ml-6 bg-oil text-white rounded-full px-6 py-2 whitespace-nowrap text-sm transition-colors duration-300 hover:bg-oil-hover"
        >
          Επικοινωνία
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-4 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[rgba(28,47,65,0.9)] z-[999] lg:hidden">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <ul className="absolute top-14 right-4 bottom-4 left-4 bg-white rounded p-4 overflow-y-auto list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 px-5 text-[#2c4964] text-base hover:text-oil transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="block py-3 px-5 text-oil font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
