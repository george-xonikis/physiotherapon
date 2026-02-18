"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 z-[996] w-10 h-10 rounded bg-oil flex items-center justify-center transition-all duration-400 hover:bg-green-main ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ArrowUp size={28} className="text-white" />
    </button>
  );
}
