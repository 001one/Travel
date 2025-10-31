"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import SmartImage from "./SmartImage";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface YouTubeNode {
  url: string;
}

interface ExternalImageNode {
  url: string;
  alt?: string;
}

interface BodyProps {
  blocks: any[];
}

export default function Body({ blocks }: BodyProps) {
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);

  const components = {
    types: {
      youTube: ({ value }: { value: YouTubeNode }) => (
        <div className="relative w-full aspect-video my-4 overflow-hidden rounded-lg shadow">
          <ReactPlayer url={value.url} width="100%" height="100%" controls />
        </div>
      ),

      externalImage: ({ value }: { value: ExternalImageNode }) => {
        if (!value?.url) return null;

        const [orientation, setOrientation] = useState<
          "portrait" | "landscape" | null
        >(null);

        // Detect whether the image is portrait or landscape
        useEffect(() => {
          const img = new window.Image();
          img.src = value.url;
          img.onload = () => {
            setOrientation(img.width > img.height ? "landscape" : "portrait");
          };
        }, [value.url]);

        const isPortrait = orientation === "portrait";

        return (
          <div
            onClick={() => setModalImageUrl(value.url)}
            className={`relative mx-auto my-8 overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300
              ${isPortrait ? "w-[80%] max-w-2xl aspect-[3/4]" : "w-[95%] max-w-6xl aspect-auto"}
            `}
          >
       

<SmartImage
  src={value.url}
  alt={value.alt || "External Image"}
  className="object-contain rounded-xl"
/>

          </div>
        );
      },
    },
  };

  return (
    <>
      {/* ✅ Keep article body centered and full-width within its column */}
      <div className="w-full max-w-3xl mx-auto px-4">
        <PortableText value={blocks} components={components} />
      </div>

      {/* ✅ Modal for full-screen image preview */}
      {modalImageUrl && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            onClick={() => setModalImageUrl(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-500"
          >
            &times;
          </button>

          <div className="relative w-[90vw] h-[80vh] max-w-6xl">
            <Image
              src={modalImageUrl}
              alt="Full Image"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
