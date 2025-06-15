"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PortableText } from "@portabletext/react";

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
        <div className="my-6">
          <img
            src={value.url}
            alt={value.alt || "External Image"}
            className="w-full max-h-[500px] object-cover rounded-xl shadow"
          />
        </div>
      );
    },
  },
};

export default function Body({ blocks }: BodyProps) {
  return <PortableText value={blocks} components={serializers} />;
}
