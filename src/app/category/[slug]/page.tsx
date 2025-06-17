import { client } from "@/sanity/client";
import type { SanityDocument } from "next-sanity";
import Link from "next/link";

const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt
    }
  }
`;

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }; // ✅ remove Promise here
}) {
  const category = await client.fetch<{
    title: string;
    posts: SanityDocument[];
  }>(POSTS_BY_CATEGORY_QUERY, {
    slug: params.slug,
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Posts in: {category?.title || params.slug}
      </h1>

      {category?.posts?.length === 0 ? (
        <p className="text-gray-600">No posts found in this category.</p>
      ) : (
        <ul className="space-y-4">
          {category.posts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/${post.slug.current}`}
                className="text-blue-600 hover:underline text-xl"
              >
                {post.title || "Untitled Post"}
              </Link>
              <p className="text-sm text-gray-500">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : "Unknown date"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
