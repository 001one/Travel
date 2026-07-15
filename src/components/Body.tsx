"use client";

import React, { useState } from "react";
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

        return (
          <div
            onClick={() => setModalImageUrl(value.url)}
            className="cursor-pointer hover:scale-[1.02] transition-transform duration-300 my-8"
          >
            <SmartImage src={value.url} alt={value.alt || "External Image"} />
          </div>
        );
      },
    },

    // ✅ Outside types, at the top level of components
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-outside ml-6 my-4 space-y-2">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-outside ml-6 my-4 space-y-2">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({ children }: any) => (
        <li className="text-lg leading-relaxed pl-2">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="text-lg leading-relaxed pl-2">{children}</li>
      ),
    },
  };
  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-4">
        <PortableText value={blocks} components={components} />
      </div>

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
