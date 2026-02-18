import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: doctor.pageTitle,
    description: `${doctor.name} - ${doctor.role}`,
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return (
    <main>
      <HeroSection variant={doctor.heroVariant} />

      {/* Bio Section */}
      <section className="py-15 overflow-hidden text-white">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-[60%] mx-auto font-heading">
            <div className="space-y-0">
              {doctor.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className={`py-4 ${sIdx < doctor.sections.length - 1 ? "border-b border-white/20" : ""} ${section.centered ? "text-center" : ""}`}
                >
                  {sIdx === 0 && (
                    <>
                      <h2 className="text-[35px] font-bold tracking-[0.03em] text-left mb-2">
                        {doctor.name}
                      </h2>
                      <span className="text-[22px] font-bold tracking-[0.03em] block mb-4">
                        {doctor.role}
                      </span>
                    </>
                  )}
                  {section.headings?.map((h, hIdx) => (
                    <h4
                      key={hIdx}
                      className="text-[25px] font-bold mb-2"
                    >
                      {h.text}
                    </h4>
                  ))}
                  {section.content.map((text, tIdx) => (
                    <p
                      key={tIdx}
                      className="text-[22px] font-bold tracking-[0.03em]"
                    >
                      {text}
                    </p>
                  ))}
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
          <SectionTitle title="Επικοινωνία" />
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
