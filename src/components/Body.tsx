"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

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

  const serializers = {
    types: {
      youTube: ({ value }: { value: YouTubeNode }) => {
        return (
          <div className="relative w-full aspect-video my-4 overflow-hidden rounded-lg shadow">
            <ReactPlayer url={value.url} width="100%" height="100%" controls />
          </div>
        );
      },
      externalImage: ({ value }: { value: ExternalImageNode }) => {
        if (!value?.url) return null;

        return (
          <>
            {/* Thumbnail Image */}
               <div
        onClick={() => setModalImageUrl(value.url)}
        className="relative w-full max-w-4xl mx-auto my-6 h-[450px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
      >
        <Image
          src={value.url}
          alt={value.alt || "External Image"}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>
          </>
        );
      },
    },
  };

  return (
    <>
      <PortableText value={blocks} components={serializers} />

      {/* Modal */}
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
