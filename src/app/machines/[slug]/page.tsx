import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { machines, getMachineBySlug } from "@/data/machines";
import MachinePageContent from "@/components/MachinePageContent";

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
    description: machine.description.gr[0]?.slice(0, 160),
  };
}

export default async function MachinePage({ params }: Props) {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);
  if (!machine) notFound();

  return <MachinePageContent machine={machine} />;
}
