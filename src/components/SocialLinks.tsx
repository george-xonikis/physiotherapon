import { Facebook, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-8 my-6">
      <a
        href="https://www.facebook.com/profile.php?id=100093225618040"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={55} className="text-white hover:text-oil transition-colors" />
      </a>
      <a
        href="https://www.instagram.com/physiotherapon_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={55} className="text-white hover:text-oil transition-colors" />
      </a>
    </div>
  );
}
