"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function optimizeCloudinaryUrl(url: string): string {
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_600/");
  }
  return url;
}

export default function ScrollableRow({ posts }: { posts: any[] }) {
  const rowRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const scrollAmount = 300;
    rowRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 -translate-x-3"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Scrollable List */}
      <ul
        ref={rowRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory max-w-full scroll-px-4"
      >
        {posts.map((post: any) => (
          <li
            key={post._id}
            className="relative flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-2xl snap-start
                       w-[calc(50vw-1rem)] sm:w-[45%] md:w-[260px] lg:w-[280px] xl:w-[320px]"
          >
            <Link href={`/${post.slug.current}`} className="block">
              {post.thumbnailImage?.url && (
                <Image
                  src={optimizeCloudinaryUrl(post.thumbnailImage.url)}
                  alt={
                    post.thumbnailImage.alt || post.title || "Post thumbnail"
                  }
                  width={500}
                  height={400}
                  className="rounded-t-lg w-full h-[240px] sm:h-[270px] lg:h-[300px] object-cover"
                />
              )}
              <div className="p-3">
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {post.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 translate-x-3"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
