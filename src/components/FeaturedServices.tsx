import { Flower, Leaf, Gift } from "lucide-react";

export default function FeaturedServices() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800">Our Floral Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <Flower className="text-pink-500 w-10 h-10" />
          <h3 className="text-lg font-semibold mt-4">Fresh Flower Arrangements</h3>
          <p className="text-gray-600 text-center">Beautiful, handcrafted floral designs for any occasion.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <Leaf className="text-green-500 w-10 h-10" />
          <h3 className="text-lg font-semibold mt-4">Indoor & Outdoor Plants</h3>
          <p className="text-gray-600 text-center">Lush greenery to brighten your home and garden.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <Gift className="text-yellow-500 w-10 h-10" />
          <h3 className="text-lg font-semibold mt-4">Floral Gift Packages</h3>
          <p className="text-gray-600 text-center">Custom flower gifts for birthdays, anniversaries, and more.</p>
        </div>
      </div>
    </div>
  );
}
