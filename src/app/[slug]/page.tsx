import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Body from "@/components/Body";
import Image from "next/image";
import { Metadata } from "next";
import CategoriesGrid from "@/components/CategoriesGrid";
import RelatedPostsSidebar from "@/components/RelatedPostsSidebar";
import RelatedCategoryPosts from "@/components/RelatedCategoryPosts";

export const revalidate = 30;

const POST_QUERY = `
{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    image,
    excerpt,
    publishedAt,
    "firstImage": body[_type == "externalImage"][0],
    body[]{
      ...,
      _type == "externalImage" => {
        _type,
        url,
        alt
      },
      _type == "youTube" => {
        _type,
        url
      }
    },
    categories[]->{ _id, title, slug }
  },
  "categories": *[_type == "category"] | order(_createdAt desc)[0...6]{
    _id,
    title,
    slug,
    "image": image.asset->url
  }
}
`;

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

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { post } = await client.fetch<{ post: SanityDocument }>(
    POST_QUERY,
    params,
  );

  const title = post?.title
    ? `${post.title} | Linus Tech Tips Review`
    : "Linus Tech Tips Review | Post Not Found";

  const description = post?.excerpt
    ? post.excerpt
    : "Stay ahead with expert tech insights, benchmarks, and honest opinions.";

  const ogImage = post?.firstImage?.url ?? null;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post?.publishedAt,
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: post?.firstImage?.alt || post.title,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function PostPage(props: PostPageProps) {
  const params = await props.params;
  const slug = params.slug;

  const { post, categories } = await client.fetch(POST_QUERY, { slug });

  const postImageUrl = post?.image ? urlFor(post.image)?.url() : null;

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:space-x-10">
        {/* Left/Main Content */}
        <div className="flex-1 space-y-12 text-lg sm:text-xl leading-relaxed">
          <Link
            href="/"
            className="hover:underline hover:bg-blue-500 hover:text-white rounded-lg p-4 inline-block"
          >
            ← Back to posts
          </Link>

          {postImageUrl && (
            <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto aspect-auto max-h-[80vh]">
              <Image
                src={postImageUrl}
                alt={post.title ?? "Post Image"}
                fill
                className="rounded-xl shadow-md object-contain"
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

            <RelatedCategoryPosts
              categoryId={post?.categories?.[0]?._id ?? null}
              currentPostSlug={params.slug}
            />

            <CategoriesGrid categories={categories || []} />
          </div>
        </div>

        {/* Right Sidebar */}
        <RelatedPostsSidebar />
      </div>
    </main>
  );
}
