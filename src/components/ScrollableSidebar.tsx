"use client";

import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnailImage?: { url: string };
}

export default function ScrollableSidebar({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6 overflow-y-hidden hover:overflow-y-auto max-h-[80vh] sidebar-scroll">
      {posts.map((post) => {
        const imageUrl = post.thumbnailImage?.url;

        return (
          <Link
            href={`/${post.slug.current}`}
            key={post._id}
            className="block hover:opacity-90 transition text-center"
          >
            {imageUrl && (
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-2 shadow-sm">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-sm font-medium leading-tight line-clamp-2 px-2">
              {post.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
