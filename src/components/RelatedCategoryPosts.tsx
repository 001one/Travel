import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

const RELATED_QUERY = `
  *[_type == "post" && references($categoryId) && slug.current != $currentPostSlug] 
  | order(_createdAt desc)[0...10] {
    _id,
    title,
    slug,
    "thumbnailImage": coalesce(
      image.asset->url,
      body[_type == "externalImage"][0].url
    )
  }
`;

const FALLBACK_QUERY = `
  *[_type == "post" && slug.current != $currentPostSlug]
  | order(_createdAt desc)[0...10] {
    _id,
    title,
    slug,
    "thumbnailImage": coalesce(
      image.asset->url,
      body[_type == "externalImage"][0].url
    )
  }
`;

export default async function RelatedCategoryPosts({
  categoryId,
  currentPostSlug,
}: any) {
  let posts = categoryId
    ? await client.fetch(RELATED_QUERY, { categoryId, currentPostSlug })
    : [];

  // Fallback to latest posts if no related posts found
  if (!posts?.length) {
    posts = await client.fetch(FALLBACK_QUERY, { currentPostSlug });
  }

  if (!posts?.length) return null;

  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {randomPosts.map((post: any) => (
          <Link
            key={post._id}
            href={`/${post.slug.current}`}
            className="block group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
          >
            {post.thumbnailImage && (
              <Image
                src={post.thumbnailImage}
                alt={post.title}
                width={500}
                height={300}
                className="object-cover w-full h-[240px] group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
              />
            )}
            <h3 className="p-3 text-md font-semibold group-hover:text-blue-600 transition">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
