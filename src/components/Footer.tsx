import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { href: "/#hero", label: "Αρχική" },
  { href: "/#about", label: "Σχετικά με εμάς" },
  { href: "/#therapies", label: "Θεραπείες" },
  { href: "/#services", label: "Μηχανήματα" },
  { href: "/#contact", label: "Επικοινωνία" },
];

export default function Footer() {
  return (
    <footer className="text-white text-sm">
      <div className="pt-15 pb-8 px-4 shadow-[0px_2px_15px_rgba(25,119,204,0.1)]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">
            <div className="mb-8 text-right">
              <h3 className="text-[22px] font-bold font-heading mb-8">
                Physiotherapon
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-end">
                  <span>ΠΑΠΑΦΗ 125, 1ος Όροφος, Θεσσαλονίκη</span>
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
              <h4 className="text-base font-bold pb-3">Χρήσιμοι Σύνδεσμοι</h4>
              <ul className="list-none p-0 m-0">
                {footerLinks.map((link) => (
                  <li
                    key={link.href}
                    className="py-2.5 first:pt-0 flex items-center"
                  >
                    <ChevronRight size={18} className="text-oil mr-1" />
                    <Link
                      href={link.href}
                      className="text-[#777] transition-colors duration-300 hover:text-oil"
                    >
                      {link.label}
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
