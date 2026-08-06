import { client } from "@/sanity/client";
import type { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = await client.fetch<{ title: string }>(
    POSTS_BY_CATEGORY_QUERY,
    { slug },
  );

  const title = category?.title
    ? `${category.title} | Linus Tech Tips Review`
    : "Tech Category | Linus Tech Tips Review";

  const description = category?.title
    ? `Browse all ${category.title} reviews, comparisons, and buying guides. Find the best ${category.title} with expert insights and honest opinions.`
    : "Browse tech reviews, comparisons, and buying guides on Linus Tech Tips Review.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://linustectips.com/category/${slug}`,
      type: "website",
      siteName: "Linus Tech Tips Reviews",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://linustectips.com/category/${slug}`,
    },
  };
}

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

const FALLBACK_IMAGE = "/fallback.jpg";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = await client.fetch<{
    title: string;
    posts: SanityDocument[];
  }>(POSTS_BY_CATEGORY_QUERY, {
    slug: slug,
  });

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 mt-5">
      <h1 className="font-bold flex justify-center text-5xl mt-5 text-blue-600">
        Posts in: {category?.title || slug}
      </h1>

      {category?.posts?.length === 0 ? (
        <p className="text-gray-600 mt-10 text-center">
          No posts found in this category.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full shadow-lg p-4 mt-6">
          {category.posts.map((post) => (
            <li
              key={post._id}
              className="relative hover:underline hover:bg-white p-2 rounded-lg hover:text-blue-400 hover:shadow-2xl transition-all duration-300"
            >
              <Link href={`/${post.slug.current}`} className="block space-y-2">
                <div className="relative">
                  <Image
                    src={post.thumbnailImage?.url || FALLBACK_IMAGE}
                    alt={post.thumbnailImage?.alt || "Post thumbnail"}
                    className="rounded-lg w-full h-auto max-h-[450px] object-cover sm:h-[350px] md:h-[400px] lg:h-[450px]"
                    width={600}
                    height={550}
                    priority
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                </div>{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
