import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Body from "./Body";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body,
  "thumbnailImage": body[ _type == "externalImage" ][0]
}`;


export default async function PostsList() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <Suspense>
    <section className="bg-white p-6 rounded-2xl shadow-md ">
     <div className="flex justify-between mb-6">
     <h2 className="text-3xl font-bold">Latest Posts</h2>
     
      <Link href="/" className="group inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:underline">
        <ArrowLeft className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="text-lg font-semibold">Back to Home</span>
      </Link>
      </div> 
      <div className="relative">
  <ul className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
   {posts.map((post) => (
                    <li key={post._id} className="relative w-[220px] flex-shrink-0 bg-white p-3 rounded-lg shadow-md hover:shadow-2xl">
    <Link href={`/${post.slug.current}`} className="block space-y-2">
      <h3 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h3>
   

      {post.thumbnailImage?.url && (
        <Image
          src={post.thumbnailImage.url}
          alt={post.thumbnailImage.alt || "Post thumbnail"}
           width={220}
          height={220}
          className="rounded-lg w-full h-auto object-cover"
        />
      )}
    </Link>
  </li>
))}

      </ul>
      </div>
    </section>
    </Suspense>
    
  );
}
