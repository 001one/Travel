import Image from "next/image";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  image?: string;
}

export default function CategoriesGrid({ categories }: { categories: Category[] }) {
  if (!categories.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Explore More Categories</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/category/${category.slug.current}`}
            className="group block overflow-hidden rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-center">{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
