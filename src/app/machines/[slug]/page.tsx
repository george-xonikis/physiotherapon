import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { machines, getMachineBySlug } from "@/data/machines";
import MachinesSidebar from "@/components/MachinesSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);
  if (!machine) return {};
  return {
    title: machine.pageTitle,
    description: machine.description[0]?.slice(0, 160),
  };
}

export default async function MachinePage({ params }: Props) {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);
  if (!machine) notFound();

  return (
    <main>
      <section className="py-15 overflow-hidden bg-green-main min-h-[500px] mt-[110px]">
        <div className="container mx-auto px-4">
          <div className="text-center pb-8">
            <h2 className="text-[32px] font-bold mb-5 pb-5 relative text-white font-heading before:content-[''] before:absolute before:block before:w-[120px] before:h-px before:bg-[#ddd] before:bottom-px before:left-[calc(50%-60px)] after:content-[''] after:absolute after:block after:w-10 after:h-[3px] after:bg-oil after:bottom-0 after:left-[calc(50%-20px)]">
              Equipment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Images */}
            <div className="md:col-span-3">
              {machine.images.map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt={machine.title}
                  width={300}
                  height={300}
                  className="w-full h-auto my-1"
                />
              ))}
            </div>

            {/* Content */}
            <div className="md:col-span-6">
              <h3 className="text-white font-bold font-heading text-2xl mb-4">
                {machine.title}{" "}
                {machine.subtitle && (
                  <small className="font-normal text-sm">
                    {machine.subtitle}
                  </small>
                )}
              </h3>

              {machine.description.map((para, i) => (
                <p key={i} className="text-white text-base mb-4">
                  {para}
                </p>
              ))}

              {machine.features && (
                <>
                  <p className="text-white text-base mb-2">
                    Βασικά χαρακτηριστικά:
                  </p>
                  <ul className="text-white list-disc pl-6 space-y-1">
                    {machine.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-3">
              <MachinesSidebar activeSlug={slug} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
