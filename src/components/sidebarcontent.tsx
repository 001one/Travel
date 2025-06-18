import { Flower, Leaf, Gift } from "lucide-react";
import { Phone, MapPin, MessageCircle } from "lucide-react"; // Importing icons for phone, location, and WhatsApp

const SidebarContent = () => {
  return (
    <div className="flex flex-col">
      <aside className="hidden lg:flex flex-col gap-6 p-6 w-72 bg-white rounded-2xl shadow-xl">
        {/* Elegant Floral Arrangements Section */}
        <div className="flex items-center gap-3">
          <Flower className="text-pink-600" size={28} />
          <p className="text-lg font-semibold">Elegant Floral Arrangements</p>
        </div>

        {/* Fresh & Sustainable Flowers Section */}
        <div className="flex items-center gap-3">
          <Leaf className="text-green-600" size={28} />
          <p className="text-lg font-semibold">Fresh & Sustainable Flowers</p>
        </div>

        {/* Custom Bouquets for Every Occasion Section */}
        <div className="flex items-center gap-3">
          <Gift className="text-yellow-600" size={28} />
          <p className="text-lg font-semibold">Custom Bouquets for Every Occasion</p>
        </div>
      </aside>

      {/* Call/Contact Section with Icons */}
      <div className="mt-6 p-6 bg-white rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold mb-4">Visit Us or Order</h1>
        
        {/* Location with MapPin Icon */}
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-blue-500" size={24} />
          <p className="text-lg">Visit us at our flower shop in <span className="font-semibold">Kitengela</span>.</p>
        </div>

        {/* Call/WhatsApp with Phone and WhatsApp Icons */}
        <div className="flex items-center gap-3">
          <Phone className="text-green-500" size={24} />
          <p className="text-lg">Call or WhatsApp us at <span className="font-semibold">0723785446</span></p>
          <a href="https://wa.me/254723785446" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="text-green-600 hover:text-green-500" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
