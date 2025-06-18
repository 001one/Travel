import Link from "next/link";
import { client } from "@/sanity/client";

// GROQ query to fetch categories
const CATEGORIES_QUERY = `*[_type == "category"]{_id, title}`;

export default async function CategorySidebar() {
  // Fetch categories
  const categories = await client.fetch<{ _id: string; title: string }[]>(CATEGORIES_QUERY);

  return (
    <aside className="w-[250px] h-full bg-white p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category._id}>
            <Link
              href={`/category/${category.title.toLowerCase()}`}
              className="block py-2 px-3 rounded-lg hover:bg-yellow-500 hover:text-white transition text-1xl"
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
