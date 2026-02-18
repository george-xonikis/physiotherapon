"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ZOOM_LEVELS = [48000, 12000, 3000, 760, 380, 190];
const DEFAULT_ZOOM = 2;

function buildSrc(zoomValue: number) {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${zoomValue}!2d22.9637!3d40.6127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8399a36a9e107%3A0xcd96a3a4cd740738!2zUGh5c2lvdGhlcmFwb24gfCDOoy5URc6hzpbOkc6dzpnOlM6XzqMgLSDOlS7OoM6RzqDOkc6YzpXOn86UzqnOoc6fzqU!5e0!3m2!1sel!2sgr!4v1705920623143!5m2!1sel!2sgr`;
}

export default function GoogleMap() {
  const [zoomIdx, setZoomIdx] = useState(DEFAULT_ZOOM);

  const zoomIn = () => setZoomIdx((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1));
  const zoomOut = () => setZoomIdx((i) => Math.max(i - 1, 0));

  return (
    <div className="relative">
      <iframe
        title="Physiotherapon location"
        src={buildSrc(ZOOM_LEVELS[zoomIdx])}
        className="border-0 w-full h-[350px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        <button
          onClick={zoomIn}
          disabled={zoomIdx >= ZOOM_LEVELS.length - 1}
          aria-label="Zoom in"
          className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-40"
        >
          <Plus size={18} />
        </button>
        <button
          onClick={zoomOut}
          disabled={zoomIdx <= 0}
          aria-label="Zoom out"
          className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-40"
        >
          <Minus size={18} />
        </button>
      </div>
    </div>
  );
}
