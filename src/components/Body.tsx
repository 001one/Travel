"use client";

import React from "react";
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
         <div className="relative w-full my-6 aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow">
      <Image
        src={value.url}
        alt={value.alt || "External Image"}
        fill
        
        className="object-contain"
        priority
      />
    </div>
      );
    },
  },
};

export default function Body({ blocks }: BodyProps) {
  return <PortableText value={blocks} components={serializers} />;
}
