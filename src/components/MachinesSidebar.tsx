import Link from "next/link";

const machineLinks = [
  { slug: "tecar", label: "Tecar" },
  { slug: "electrotherapy", label: "Ηλεκτροθεραπεία" },
  { slug: "pressotherapy", label: "Πρεσοθεραπεία" },
  { slug: "diathermy", label: "Λάμπα Διαθερμίας" },
  { slug: "ultrasound", label: "Υπέρηχος" },
  { slug: "laser", label: "Laser" },
  { slug: "aquilo", label: "Aquilo" },
];

interface MachinesSidebarProps {
  activeSlug: string;
}

export default function MachinesSidebar({ activeSlug }: MachinesSidebarProps) {
  return (
    <nav className="flex flex-col">
      {machineLinks.map((link) => (
        <Link
          key={link.slug}
          href={`/machines/${link.slug}`}
          className={`block p-4 border-l-[5px] transition-all duration-300 ease-in-out ${
            activeSlug === link.slug
              ? "bg-white text-oil border-oil"
              : "text-white border-white hover:text-black hover:bg-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
