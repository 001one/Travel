import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Body from "@/components/Body";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: params.slug },
    options
  );

  const postImageUrl = post?.image
    ? urlFor(post.image)?.url()
    : null;

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="hover:underline hover:bg-blue-500 hover:text-white rounded-lg p-4 mb-30"
      >
        ← Back to posts
      </Link>

      <h1 className="text-4xl font-bold mb-8">
        {post?.title || "Untitled Post"}
      </h1>

      <div className="prose h-[1000px]">
        <p>
          Published:{" "}
          {post?.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "Unknown"}
        </p>

        {Array.isArray(post?.body) && post.body.length > 0 ? (
          <Body blocks={post.body} />
        ) : (
          <p className="text-gray-500 italic mt-4">
            No content available for this post.
          </p>
        )}
      </div>

      {postImageUrl && (
        <div className="relative w-[550px] h-[310px] aspect-video rounded-xl overflow-hidden my-4">
          <Image
            src={postImageUrl}
            alt={post.title ?? "Post Image"}
            className="w-full max-w-3xl h-auto object-contain rounded-lg"
            width={800}
            height={800}
          />
        </div>
      )}
    </main>
  );
}
