"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import type { Locale } from "@/i18n/types";

const navKeys = [
  { href: "/#hero", key: "nav.home" },
  { href: "/#about", key: "nav.about" },
  { href: "/#therapies", key: "nav.therapies" },
  { href: "/#services", key: "nav.machines" },
  { href: "/#gallery", key: "nav.gallery" },
  { href: "/#doctors", key: "nav.doctors" },
  { href: "/#location", key: "nav.location" },
];

function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  const btn = (l: Locale, label: string) => (
    <button
      onClick={() => setLocale(l)}
      className={`px-2 py-1 text-xs font-bold rounded transition-colors duration-200 ${
        locale === l
          ? "bg-oil text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-1">
      {btn("gr", "GR")}
      <span className="text-white/40">|</span>
      {btn("en", "EN")}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

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
            {navKeys.map((link) => (
              <li key={link.href} className="pl-5">
                <Link
                  href={link.href}
                  className="text-white text-sm border-b-2 border-white pb-1 px-0.5 transition-colors duration-300 hover:text-oil hover:border-oil"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center ml-6 gap-4">
          <LanguageSelector />
          <Link
            href="/#contact"
            className="bg-oil text-white rounded-full px-6 py-2 whitespace-nowrap text-sm transition-colors duration-300 hover:bg-oil-hover"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSelector />
          <Link
            href="/#contact"
            className="bg-oil text-white rounded-full px-6 py-2 whitespace-nowrap text-sm transition-colors duration-300 hover:bg-oil-hover"
          >
            {t("nav.contact")}
          </Link>
          <button
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
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
            {navKeys.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 px-5 text-foreground-inverse text-base hover:text-oil transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="block py-3 px-5 text-oil font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
