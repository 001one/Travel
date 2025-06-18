import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Body from "@/components/Body";
import Image from "next/image";
import { Metadata } from "next";

// Enable ISR (optional)
export const revalidate = 30;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: params.slug }
  );

  const postImageUrl = post?.image
    ? urlFor(post.image)?.url()
    : null;

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link
          href="/"
          className="hover:underline hover:bg-blue-500 hover:text-white rounded-lg p-4 inline-block"
        >
          ← Back to posts
        </Link>

        <h1 className="text-4xl font-bold">
          {post?.title || "Untitled Post"}
        </h1>

        <p className="text-gray-500">
          Published:{" "}
          {post?.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "Unknown"}
        </p>

        {postImageUrl && (
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src={postImageUrl}
              alt={post.title ?? "Post Image"}
              className="w-full h-auto object-cover rounded-lg"
              width={800}
              height={450}
              priority
            />
          </div>
        )}

        <div className="prose max-w-none">
          {Array.isArray(post?.body) && post.body.length > 0 ? (
            <Body blocks={post.body} />
          ) : (
            <p className="text-gray-500 italic">
              No content available for this post.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
