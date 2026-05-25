"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full">
      {/* Large Image */}
      <div className="relative w-full h-[650px] rounded-3xl overflow-hidden bg-white border border-gray-200">
        <Image
          src={selectedImage}
          alt={name}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setSelectedImage(img)}
            className={`relative shrink-0 h-24 w-24 rounded-2xl overflow-hidden border-2 transition ${
              selectedImage === img
                ? "border-black"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}