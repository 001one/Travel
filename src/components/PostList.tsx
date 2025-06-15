import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Body from "./Body";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

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
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">

   {posts.map((post) => (
  <li key={post._id} className="hover:bg-gray-50 p-4 rounded-lg transition w-full h-auto shadow-sm hover:shadow-2xl">
    <Link href={`/${post.slug.current}`} className="block space-y-2">
      <h3 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h3>
      <time className="text-sm text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>

      {post.thumbnailImage?.url && (
        <img
          src={post.thumbnailImage.url}
          alt={post.thumbnailImage.alt || "Post thumbnail"}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      )}
    </Link>
  </li>
))}

      </ul>
    </section>
    </Suspense>
  );
}
