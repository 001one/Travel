import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CATEGORY_WITH_POSTS_QUERY = `
  *[_type == "category"]{
    _id,
    title,
    slug,
    "posts": *[_type == "post" && references(^._id) && defined(slug.current)] | order(publishedAt desc)[0...10] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      "thumbnailImage": body[_type == "externalImage"][0]
    }
  }
`;

export default async function PostsList() {
  const categories = await client.fetch<SanityDocument[]>(CATEGORY_WITH_POSTS_QUERY);

  return (
    <section className="space-y-16 px-4">
      {categories.map((category) => (
        <div key={category._id} className="p-4">
          {/* Category header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <Link
              href={`/category/${category.slug.current}`}
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              See all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Horizontally scrollable posts */}
          <ul className="flex gap-4 overflow-x-auto scrollbar-hide p-5">
            {category.posts.map((post: any) => (
              <li
  key={post._id}
  className="relative w-[320px] flex-shrink-0 bg-white p-3 rounded-lg shadow-md hover:shadow-2xl"
>
  <Link href={`/${post.slug.current}`} className="block">
    {post.thumbnailImage?.url && (
      <Image
        src={post.thumbnailImage.url}
        alt={post.thumbnailImage.alt || "Post thumbnail"}
        width={320}
        height={270}
        className="rounded-lg w-full h-[270px] object-cover"
      />
    )}
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500">
        {post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString()
          : "Unpublished"}
      </p>
    </div>
  </Link>
</li>

            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
