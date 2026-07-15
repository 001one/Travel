import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";
import ScrollableSidebar from "./ScrollableSidebar";

const RELATED_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(_createdAt desc)[0...20]{
    _id,
    title,
    slug,
    "thumbnailImage": body[_type == "externalImage"][0]
  }
`;

export default async function RelatedPostsSidebar() {
  const posts = await client.fetch(RELATED_POSTS_QUERY);
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 7);

  return (
    <aside className="hidden lg:block lg:w-1/3 xl:w-1/4 pl-8 sticky top-30 self-start">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        You'll Love These Too!
      </h2>
      <ScrollableSidebar posts={randomPosts} />
    </aside>
  );
}
