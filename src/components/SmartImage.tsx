"use client";

import React, { useState } from "react";

interface SmartImageProps {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
}

export default function SmartImage({
  src,
  alt = "",
  className = "",
  sizes = "100vw",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      <div
       className={`object-contain rounded-xl w-full h-auto ${className}`}

      />

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        sizes={sizes}
        srcSet={`
          ${src}?w=480 480w,
          ${src}?w=768 768w,
          ${src}?w=1024 1024w,
          ${src}?w=1600 1600w
        `}
        className={`transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        } object-contain rounded-xl w-full h-auto`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
