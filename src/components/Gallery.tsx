"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/gallery/gallery-${i + 1}.webp`,
  alt: `Gallery image ${i + 1}`,
}));

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="overflow-hidden border-r-[3px] border-b-[3px] border-white cursor-pointer group"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-auto transition-transform duration-400 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </>
  );
}
