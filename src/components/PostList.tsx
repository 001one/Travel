import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ArrowRight } from "lucide-react";
import ScrollableRow from "./ScrollableRow";

export const revalidate = 30;

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
      "thumbnailImage": body[_type == "externalImage"][0]
    }
  }
`;

export default async function PostsList() {
  const categories = await client.fetch<SanityDocument[]>(
    CATEGORY_WITH_POSTS_QUERY,
  );
  const categoriesWithPosts = categories.filter(
    (category) => category.posts?.length > 0,
  );

  return (
    <section className="space-y-16 px-0">
      {categoriesWithPosts.map((category) => (
        <div key={category._id} className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <Link
              href={`/category/${category.slug.current}`}
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              See all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ScrollableRow posts={category.posts} />
        </div>
      ))}
    </section>
  );
}
