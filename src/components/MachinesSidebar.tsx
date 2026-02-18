"use client";

import Link from "next/link";
import { machines } from "@/data/machines";
import { useI18n } from "@/i18n/I18nContext";

interface MachinesSidebarProps {
  activeSlug: string;
}

export default function MachinesSidebar({ activeSlug }: MachinesSidebarProps) {
  const { locale } = useI18n();

  return (
    <nav className="flex flex-col">
      {machines.map((machine) => (
        <Link
          key={machine.slug}
          href={`/machines/${machine.slug}`}
          className={`block p-4 border-l-[5px] transition-all duration-300 ease-in-out ${
            activeSlug === machine.slug
              ? "bg-white text-oil border-oil"
              : "text-white border-white hover:text-black hover:bg-white"
          }`}
        >
          {machine.title[locale]}
        </Link>
      ))}
    </nav>
  );
}
