import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import DoctorPageContent from "@/components/DoctorPageContent";

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
    description: `${doctor.name.gr} - ${doctor.role.gr}`,
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return <DoctorPageContent doctor={doctor} />;
}
