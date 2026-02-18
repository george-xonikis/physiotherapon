"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { machines } from "@/data/machines";
import { useI18n } from "@/i18n/I18nContext";

export default function HomePage() {
  const { locale, t } = useI18n();

  return (
    <main>
      <HeroSection variant="home" />

      {/* Why Us Section */}
      <section id="why-us" className="relative z-10 py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Why Choose */}
            <div className="p-8 bg-gray-main rounded flex flex-col">
              <h3 className="font-bold text-[34px] font-heading mb-6">
                {t("whyUs.title")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: t("whyUs.description.html") }}
              />
              <ul className="list-disc list-inside space-y-2 opacity-90 text-sm">
                <li>{t("whyUs.feature1")}</li>
                <li>{t("whyUs.feature2")}</li>
                <li>{t("whyUs.feature3")}</li>
              </ul>
            </div>

            {/* Doctor 1 */}
            <div className="text-center rounded-xl bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)] p-8 flex flex-col text-foreground-inverse">
              <Image
                src="/images/doctors/terzanidis.png"
                alt={`${t("whyUs.doctor1.firstName")} ${t("whyUs.doctor1.lastName")}`}
                width={87}
                height={87}
                className="mx-auto my-4 aspect-square object-cover"
              />
              <h4 className="text-xl font-bold mb-4 font-heading">
                {t("whyUs.doctor1.firstName")} <br /> {t("whyUs.doctor1.lastName")}
              </h4>
              <div className="text-[15px] text-start flex-1">
                <p className="mb-2">
                  {t("whyUs.doctor1.desc")}
                </p>
                <p className="mb-2 font-semibold">{t("whyUs.doctor1.specLabel")}</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{t("whyUs.doctor1.spec1")}</li>
                  <li>{t("whyUs.doctor1.spec2")}</li>
                  <li>{t("whyUs.doctor1.spec3")}</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  {t("whyUs.doctor1.experience")}
                </p>
              </div>
              <Link
                href="/doctors/terzanidis"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full transition-colors duration-300 hover:bg-oil"
              >
                {t("common.more")}
              </Link>
            </div>

            {/* Doctor 2 */}
            <div className="text-center rounded-xl bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)] p-8 flex flex-col text-foreground-inverse">
              <Image
                src="/images/doctors/papatheodorou.png"
                alt={`${t("whyUs.doctor2.firstName")} ${t("whyUs.doctor2.lastName")}`}
                width={87}
                height={87}
                className="mx-auto my-4 aspect-square object-cover"
              />
              <h4 className="text-xl font-bold mb-4 font-heading">
                {t("whyUs.doctor2.firstName")} <br /> {t("whyUs.doctor2.lastName")}
              </h4>
              <div className="text-[15px] text-start flex-1">
                <p className="mb-2">
                  {t("whyUs.doctor2.desc")}
                </p>
                <p className="mb-2 font-semibold">{t("whyUs.doctor2.expLabel")}</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{t("whyUs.doctor2.exp1")}</li>
                  <li>{t("whyUs.doctor2.exp2")}</li>
                  <li>{t("whyUs.doctor2.exp3")}</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  {t("whyUs.doctor2.allAges")}
                </p>
              </div>
              <Link
                href="/doctors/papatheodorou"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full transition-colors duration-300 hover:bg-oil"
              >
                {t("common.more")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-15 overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 relative min-h-[500px]">
              <Image
                src="/images/about.webp"
                alt="Physiotherapon"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col items-stretch justify-center py-10 px-6 lg:px-12">
              <h3 className="font-bold font-heading text-[28px] mb-4">
                {t("about.title")}
              </h3>
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: t("about.history.html") }}
              />
              <p
                className="text-white/80 text-xl italic mb-4"
                dangerouslySetInnerHTML={{ __html: t("about.etymology.html") }}
              />

              <div className="mt-8 flex items-start p-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0">
                  <Image
                    src="/images/icons/stretchIcon.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-[15px] ml-4">
                  <p className="font-semibold mb-1">{t("about.ourSpace")}</p>
                  <p className="opacity-80">
                    {t("about.ourSpaceDesc")}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start p-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0">
                  <Image
                    src="/images/icons/runIcon.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-[15px] ml-4">
                  <p className="font-semibold mb-1">{t("about.whatWeOffer")}</p>
                  <ul className="list-disc list-inside space-y-0.5 opacity-80">
                    <li>{t("about.offer1")}</li>
                    <li>{t("about.offer2")}</li>
                    <li>{t("about.offer3")}</li>
                    <li>{t("about.offer4")}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-start p-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0">
                  <Image
                    src="/images/icons/physIcon.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-[15px] ml-4">
                  <p className="font-semibold mb-1">{t("about.ourVision")}</p>
                  <p
                    className="opacity-80"
                    dangerouslySetInnerHTML={{ __html: t("about.visionText.html") }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        id="quote"
        className="py-15 overflow-hidden flex justify-center items-center flex-col min-h-[200px] text-center"
      >
        <h3 className="w-[80%] mx-auto text-lg font-normal leading-6 font-heading">
          {t("quote.text")}
        </h3>
        <p className="w-[80%] mx-auto mt-4">
          {t("quote.attribution")}
        </p>
      </section>

      {/* Therapies Section */}
      <section
        id="therapies"
        className="relative py-15 overflow-hidden min-h-[700px]"
      >
        <Image
          src="/images/therapiesBg.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(8,33,33,0.5)]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title={t("therapies.title")}>
            <p>
              {t("therapies.intro")}
            </p>
          </SectionTitle>

          <div className="w-[85%] mx-auto my-4 bg-green-main p-4 text-start rounded-[5px]">
            <p
              className="text-base font-medium leading-6"
              dangerouslySetInnerHTML={{ __html: t("therapies.box1.html") }}
            />
          </div>

          <div className="w-[85%] mx-auto my-4 bg-green-main p-4 text-start rounded-[5px]">
            <p
              className="text-base font-medium leading-6"
              dangerouslySetInnerHTML={{ __html: t("therapies.box2.html") }}
            />
          </div>

          <div className="w-[85%] mx-auto my-4 bg-green-main p-4 text-start rounded-[5px]">
            <p className="text-white text-base font-medium leading-6 mb-3">
              {t("therapies.box3Intro")}
            </p>
            <ul className="text-base font-medium leading-7 list-disc list-inside space-y-1">
              <li>{t("therapies.item1")}</li>
              <li>{t("therapies.item2")}</li>
              <li>{t("therapies.item3")}</li>
              <li>{t("therapies.item4")}</li>
              <li>{t("therapies.item5")}</li>
            </ul>
            <p className="text-white text-base font-medium leading-6 mt-3">
              {t("therapies.box3Outro")}
            </p>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section
        id="services"
        className="relative py-15 overflow-hidden min-h-[700px] mt-12"
      >
        <Image
          src="/images/machines.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(8,33,33,0.5)]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title={t("machines.sectionTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div key={machine.slug} className="flex items-stretch">
                <div className="w-full min-h-[300px] text-center border border-[#d5e1ed] p-5 bg-green-main transition-all duration-300 flex justify-center items-center flex-col group hover:bg-gray-main hover:border-green-main">
                  <div className="mx-auto w-16 h-16 bg-gray-main rounded-[5px] transition-all duration-300 flex items-center justify-center mb-5 relative z-[2] group-hover:bg-white before:absolute before:content-[''] before:left-[-8px] before:top-[-8px] before:h-full before:w-full before:bg-[rgba(14,62,62,0.53)] before:rounded-[5px] before:transition-all before:duration-300 before:-z-10 group-hover:before:bg-[rgba(255,255,255,0.3)]" />
                  <h4 className="font-bold mb-4 text-2xl font-heading">
                    <Link
                      href={`/machines/${machine.slug}`}
                      className="text-white"
                    >
                      {machine.title[locale]}
                    </Link>
                  </h4>
                  {machine.subtitle && (
                    <p className="leading-6 text-sm text-white mb-0">
                      {machine.subtitle}
                    </p>
                  )}
                  <Link
                    href={`/machines/${machine.slug}`}
                    className="inline-block mt-4 px-4 py-2 text-black bg-white rounded-full transition-colors duration-300 hover:bg-oil hover:text-white"
                  >
                    {t("common.more")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kinesiotherapy Section */}
      <section id="kinisiotherapy" className="py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/kinisiotherapy.webp"
                alt={t("kinesiotherapy.title")}
                width={600}
                height={400}
                className="w-[90%] mx-auto"
              />
            </div>
            <div>
              <h3 className="font-bold font-heading text-2xl mb-4">
                {t("kinesiotherapy.title")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: t("kinesiotherapy.p1.html") }}
              />
              <p dangerouslySetInnerHTML={{ __html: t("kinesiotherapy.p2.html") }} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("gallery.title")}>
            <p className="mb-4">
              {t("gallery.p1")}
            </p>
            <p className="mb-4">
              {t("gallery.p2")}
            </p>
            <p>
              {t("gallery.p3")}
            </p>
          </SectionTitle>
        </div>
        <div className="w-full">
          <Gallery />
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("doctors.sectionTitle")} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Terzanidis */}
            <div className="relative shadow-[0px_2px_15px_rgba(44,73,100,0.08)] p-8 text-center rounded-xl group">
              <div className="overflow-hidden block w-[140px] aspect-square mx-auto my-4 rounded-full">
                <Image
                  src="/images/doctors/terzanidis_big.png"
                  alt={t("doctors.terzanidis.name")}
                  width={140}
                  height={140}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pl-8">
                <h4 className="font-bold mb-1 text-xl text-white font-heading">
                  {t("doctors.terzanidis.name")}
                </h4>
                <span className="block text-[15px] pb-2.5 relative font-medium text-white/60 after:content-[''] after:absolute after:block after:w-[50px] after:h-px after:bg-[#b2c8dd] after:bottom-0 after:left-0">
                  {t("doctors.terzanidis.role")}
                </span>
                <div className="mt-2.5 text-sm text-white text-start min-h-[180px]">
                  <p className="italic mb-2">
                    {t("doctors.terzanidis.quote1")}
                  </p>
                  <p
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: t("doctors.terzanidis.quote2.html") }}
                  />
                  <ul className="list-disc list-inside space-y-0.5 mb-2 text-white/80">
                    <li>{t("doctors.terzanidis.list1")}</li>
                    <li>{t("doctors.terzanidis.list2")}</li>
                    <li>{t("doctors.terzanidis.list3")}</li>
                  </ul>
                  <p className="italic">{t("doctors.terzanidis.quoteEnd")}</p>
                </div>
                <Link
                  href="/doctors/terzanidis"
                  className="inline-block mt-4 px-4 py-2 text-black bg-white rounded-full transition-colors duration-300 hover:bg-oil hover:text-white"
                >
                  {t("common.bio")}
                </Link>
              </div>
            </div>

            {/* Papatheodorou */}
            <div className="relative shadow-[0px_2px_15px_rgba(44,73,100,0.08)] p-8 text-center rounded-xl group">
              <div className="overflow-hidden block w-[140px] aspect-square mx-auto my-4 rounded-full">
                <Image
                  src="/images/doctors/papatheodorou_big.png"
                  alt={t("doctors.papatheodorou.name")}
                  width={140}
                  height={140}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pl-8">
                <h4 className="font-bold mb-1 text-xl text-white font-heading">
                  {t("doctors.papatheodorou.name")}
                </h4>
                <span className="block text-[15px] pb-2.5 relative font-medium text-white/60 after:content-[''] after:absolute after:block after:w-[50px] after:h-px after:bg-[#b2c8dd] after:bottom-0 after:left-0">
                  {t("doctors.papatheodorou.role")}
                </span>
                <div className="mt-2.5 text-sm text-white text-start min-h-[180px]">
                  <p className="italic mb-2">
                    {t("doctors.papatheodorou.quote1")}
                  </p>
                  <p className="mb-2">
                    {t("doctors.papatheodorou.quote2")}
                  </p>
                  <p
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: t("doctors.papatheodorou.quote3.html") }}
                  />
                </div>
                <Link
                  href="/doctors/papatheodorou"
                  className="inline-block mt-4 px-4 py-2 text-black bg-white rounded-full transition-colors duration-300 hover:bg-oil hover:text-white"
                >
                  {t("common.bio")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Team background image */}
        <div className="relative min-h-[600px]">
          <Image
            src="/images/teamBg.webp"
            alt="Team Physiotherapon"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(8,33,33,0.07)]" />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold font-heading text-2xl mb-4">
                {t("location.title")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: t("location.desc.html") }}
              />

              <p className="mb-2 font-semibold">{t("location.transit")}</p>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>{t("location.bus1")}</li>
                <li>{t("location.bus2")}</li>
              </ul>
              <p className="mb-4 text-sm">
                {t("location.parking")}
              </p>

              <p className="mb-2 font-semibold">{t("location.accessibility")}</p>
              <p className="text-sm">
                {t("location.accessibilityDesc")}
              </p>
            </div>
            <div>
              <GoogleMap />
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
