"use client";

import Image from "next/image";
import type { Machine } from "@/data/machines";
import MachinesSidebar from "@/components/MachinesSidebar";
import SectionTitle from "@/components/SectionTitle";
import { useI18n } from "@/i18n/I18nContext";

interface MachinePageContentProps {
  machine: Machine;
}

export default function MachinePageContent({ machine }: MachinePageContentProps) {
  const { locale, t } = useI18n();

  return (
    <main>
      <section className="py-15 overflow-hidden bg-green-main min-h-[500px] mt-[110px]">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("machinePage.heading")} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Images */}
            <div className="md:col-span-3">
              {machine.images.map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt={machine.title[locale]}
                  width={300}
                  height={300}
                  className="w-full h-auto my-1"
                />
              ))}
            </div>

            {/* Content */}
            <div className="md:col-span-6">
              <h3 className="font-bold font-heading text-2xl mb-2">
                {machine.title[locale]}
              </h3>
              {machine.subtitle && (
                <p className="text-sm opacity-70 mb-5">{machine.subtitle}</p>
              )}

              {machine.description[locale].map((para, i) => (
                <p key={i} className="text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {machine.features && (
                <div className="mt-6">
                  <p className="text-base font-semibold mb-3">
                    {t("machinePage.features")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[15px] leading-relaxed">
                    {machine.features[locale].map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-3">
              <MachinesSidebar activeSlug={machine.slug} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
