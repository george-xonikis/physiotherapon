"use client";

import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const footerLinkKeys = [
  { href: "/#hero", key: "nav.home" },
  { href: "/#about", key: "footer.aboutUs" },
  { href: "/#therapies", key: "nav.therapies" },
  { href: "/#services", key: "nav.machines" },
  { href: "/#contact", key: "nav.contact" },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="text-sm">
      <div className="pt-15 pb-8 px-4 shadow-[0px_2px_15px_rgba(25,119,204,0.1)]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">
            <div className="mb-8 text-right">
              <h3 className="text-[22px] font-bold font-heading mb-8">
                Physiotherapon
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-end">
                  <span>{t("footer.address")}</span>
                  <MapPin size={18} className="text-oil shrink-0 mt-0.5" />
                </li>
                <li className="flex items-center gap-3 justify-end">
                  <a
                    href="tel:+302310946960"
                    className="transition-colors duration-300 hover:text-oil"
                  >
                    2310 946 960
                  </a>
                  <Phone size={18} className="text-oil shrink-0" />
                </li>
                <li className="flex items-center gap-3 justify-end">
                  <a
                    href="mailto:physiotherapon@gmail.com"
                    className="transition-colors duration-300 hover:text-oil"
                  >
                    physiotherapon@gmail.com
                  </a>
                  <Mail size={18} className="text-oil shrink-0" />
                </li>
              </ul>
            </div>

            <div className="mb-8 text-left">
              <h4 className="text-base font-bold pb-3">{t("footer.usefulLinks")}</h4>
              <ul className="list-none p-0 m-0">
                {footerLinkKeys.map((link) => (
                  <li
                    key={link.href}
                    className="py-2.5 first:pt-0 flex items-center"
                  >
                    <ChevronRight size={18} className="text-oil mr-1" />
                    <Link
                      href={link.href}
                      className="text-foreground-muted transition-colors duration-300 hover:text-oil"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
