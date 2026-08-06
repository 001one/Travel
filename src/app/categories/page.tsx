import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Categories | Linus Tech Tips Review",
  description:
    "Browse all tech review categories including GPUs, laptops, smartphones, TVs, and more. Find expert reviews, comparisons, and buying guides.",
  openGraph: {
    title: "Tech Categories | Linus Tech Tips Review",
    description:
      "Browse all tech review categories including GPUs, laptops, smartphones, TVs, and more.",
    url: "https://linustectips.com/categories",
    type: "website",
    siteName: "Linus Tech Tips Reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Categories | Linus Tech Tips Review",
    description:
      "Browse all tech review categories including GPUs, laptops, smartphones, TVs, and more.",
  },
  alternates: {
    canonical: "https://linustectips.com/categories",
  },
};

const CATEGORIES_QUERY = `
  *[_type == "category"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    "postCount": count(*[_type == "post" && references(^._id)]),
    "thumbnailImage": *[_type == "post" && references(^._id)] | order(publishedAt desc)[0].body[_type == "externalImage"][0].url
  }
`;

export default async function CategoriesPage() {
  const categories = await client.fetch(CATEGORIES_QUERY);

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10 mb-2 bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent">
          Tech Categories
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Browse all our tech review categories
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category: any) => (
            <Link
              key={category._id}
              href={`/category/${category.slug.current}`}
              className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 bg-white"
            >
              <div className="relative w-full h-48">
                {category.thumbnailImage ? (
                  <Image
                    src={category.thumbnailImage}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center">
                    <span className="text-4xl">💻</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {category.postCount}{" "}
                  {category.postCount === 1 ? "post" : "posts"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
