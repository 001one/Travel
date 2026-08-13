import { client } from "@/sanity/client";
import { MetadataRoute } from "next";

const BASE_URL = "https://linustectips.com";

const encodeSlug = (slug: string) => encodeURIComponent(slug);

const fetchPosts = async () => {
  const query = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
    slug,
    _updatedAt
  }`;
  const posts =
    await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
      query,
    );

  return posts.map((post) => ({
    url: `${BASE_URL}/${encodeSlug(post.slug.current)}`,
    lastModified: new Date(post._updatedAt).toISOString(),
  }));
};

const fetchCategories = async () => {
  const query = `*[_type == "category" && defined(slug.current)]{
    slug,
    _updatedAt
  }`;
  const categories =
    await client.fetch<{ slug: { current: string }; _updatedAt: string }[]>(
      query,
    );

  return categories.map((cat) => ({
    url: `${BASE_URL}/category/${encodeSlug(cat.slug.current)}`,
    lastModified: new Date(cat._updatedAt).toISOString(),
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPosts();
  const categories = await fetchCategories();

  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/categories`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/about`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/contact`, lastModified: new Date().toISOString() },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
    },
    { url: `${BASE_URL}/terms`, lastModified: new Date().toISOString() },
  ];

  return [...staticPages, ...categories, ...posts];
}
