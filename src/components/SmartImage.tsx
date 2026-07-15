"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt?: string;
  className?: string;
}

function optimizeCloudinaryUrl(url: string): string {
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200/");
  }
  return url;
}

export default function SmartImage({
  src,
  alt = "",
  className = "",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [orientation, setOrientation] = useState<
    "portrait" | "landscape" | null
  >(null);
  const optimizedSrc = optimizeCloudinaryUrl(src);

  useEffect(() => {
    const img = new window.Image();
    img.src = optimizedSrc;
    img.onload = () => {
      setOrientation(img.width > img.height ? "landscape" : "portrait");
    };
  }, [optimizedSrc]);

  const aspectClass =
    orientation === "portrait"
      ? "aspect-[3/4] max-w-2xl"
      : orientation === "landscape"
        ? "aspect-video max-w-6xl"
        : "aspect-video"; // default while detecting

  return (
    <div className={`relative w-full mx-auto ${aspectClass} ${className}`}>
      <Image
        src={optimizedSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className={`transition-opacity duration-700 ease-out object-contain rounded-xl ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}
