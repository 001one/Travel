import { client } from "@/sanity/client";
import type { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      "thumbnailImage": body[_type == "externalImage"][0]
    }
  }
`;

// Fallback image (public/static/fallback.jpg or hosted URL)
const FALLBACK_IMAGE = "/fallback.jpg"; // Make sure this file exists in /public

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ FIXED: Corrected client.fetch() call and types
  const category = await client.fetch<{
    title: string;
    posts: SanityDocument[];
  }>(POSTS_BY_CATEGORY_QUERY, {
    slug: params.slug,
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        Posts in: {category?.title || params.slug}
      </h1>

      {category?.posts?.length === 0 ? (
        <p className="text-gray-600">No posts found in this category.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.posts.map((post) => (
            <li
              key={post._id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition space-y-2"
            >
              <Link
                href={`/${post.slug.current}`}
                className="block space-y-2"
              >
                <h2 className="text-blue-700 font-semibold text-lg line-clamp-2">
                  {post.title || "Untitled Post"}
                </h2>

                <Image
                  src={post.thumbnailImage?.url || FALLBACK_IMAGE}
                  alt={post.thumbnailImage?.alt || "Post thumbnail"}
                  width={500}
                  height={300}
                  className="rounded-md w-full h-[180px] object-cover"
                />

                <p className="text-sm text-gray-500">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString()
                    : "Unknown date"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
