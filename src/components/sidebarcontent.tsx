import { Brain, Shield, Cpu, Smartphone } from "lucide-react";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const SidebarContent = () => {
  return (
    <div className="flex flex-col">
      <aside className="hidden lg:flex flex-col gap-6 p-6 w-72 bg-white rounded-2xl shadow-xl">
        
        {/* AI Tools Section */}
        <div className="flex items-center gap-3">
          <Brain className="text-purple-600" size={28} />
          <p className="text-lg font-semibold">Smart AI Tools for Daily Life</p>
        </div>

        {/* Cybersecurity Section */}
        <div className="flex items-center gap-3">
          <Shield className="text-red-600" size={28} />
          <p className="text-lg font-semibold">Cybersecurity & Privacy Tips</p>
        </div>

        {/* Future Tech Section */}
        <div className="flex items-center gap-3">
          <Cpu className="text-blue-600" size={28} />
          <p className="text-lg font-semibold">Future of Work with AI</p>
        </div>

        {/* App Recommendations */}
        <div className="flex items-center gap-3">
          <Smartphone className="text-green-600" size={28} />
          <p className="text-lg font-semibold">Best Apps & Software</p>
        </div>
      </aside>

      {/* Call/Contact Section */}
      <div className="mt-6 p-6 bg-white rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        
        {/* Location */}
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-blue-500" size={24} />
          <p className="text-lg">Get tech insights from <span className="font-semibold">anywhere</span>.</p>
        </div>

        {/* Phone / WhatsApp */}
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
