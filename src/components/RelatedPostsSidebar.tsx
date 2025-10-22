import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

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

  // Randomly shuffle & take 7
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 7);

  return (
    <aside className="hidden lg:block lg:w-1/3 xl:w-1/4 pl-8 sticky top-20 self-start">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        You'll Love These Too!
      </h2>
      <div className="space-y-6">
        {randomPosts.map((post: any) => {
          const imageUrl = post.thumbnailImage?.url;

          return (
           <Link
  href={`/${post.slug.current}`}
  key={post._id}
  className="block hover:opacity-90 transition text-center"
>
  {imageUrl && (
    <div className="relative w-full h-40 md:h-38 lg:h-40 rounded-lg overflow-hidden mb-2 shadow-sm">
      <Image
        src={imageUrl}
        alt={post.title}
        fill
        className="object-cover"
        priority
      />
    </div>
  )}
  <p className="text-sm font-medium leading-tight line-clamp-2 px-2">{post.title}</p>
</Link>

          );
        })}
      </div>
    </aside>
  );
}
