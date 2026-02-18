"use client";

import Image from "next/image";
import type { Doctor } from "@/data/doctors";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { useI18n } from "@/i18n/I18nContext";

interface DoctorPageContentProps {
  doctor: Doctor;
}

export default function DoctorPageContent({ doctor }: DoctorPageContentProps) {
  const { locale, t } = useI18n();

  const heroKey = doctor.heroVariant === "terzanidis" ? "hero.terzanidis" : "hero.papatheodorou";

  return (
    <main>
      <HeroSection
        variant={doctor.heroVariant}
        firstName={t(`${heroKey}.firstName`)}
        lastName={t(`${heroKey}.lastName`)}
      />

      {/* Bio Section */}
      <section className="py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-[60%] mx-auto">
            {/* Name & Role */}
            <div className="mb-10 border-b border-white/20 pb-8">
              <h2 className="text-[38px] font-bold tracking-[0.03em] font-heading mb-3">
                {doctor.name[locale]}
              </h2>
              <span className="text-lg font-medium tracking-wide text-white/60 block">
                {doctor.role[locale]}
              </span>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {doctor.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className={
                    section.centered
                      ? "text-center border-l-2 border-oil pl-6 py-2 italic text-white/70"
                      : ""
                  }
                >
                  {section.headings?.map((h, hIdx) => (
                    <h4
                      key={hIdx}
                      className="text-xl font-bold font-heading mb-2 not-italic text-white"
                    >
                      {h.text[locale]}
                    </h4>
                  ))}
                  {section.list ? (
                    <ul className="list-disc list-inside space-y-2 text-[17px] leading-relaxed">
                      {section.content[locale].map((text, tIdx) => (
                        <li key={tIdx}>{text}</li>
                      ))}
                    </ul>
                  ) : (
                    section.content[locale].map((text, tIdx) => (
                      <p
                        key={tIdx}
                        className={
                          section.centered
                            ? "text-base leading-relaxed"
                            : "text-[17px] leading-relaxed mb-3"
                        }
                      >
                        {text}
                      </p>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-15 overflow-hidden min-h-[600px]"
      >
        <Image
          src="/images/contactBg.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(8,33,33,0.5)]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title={t("nav.contact")} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
            <div>
              <ContactInfo />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
