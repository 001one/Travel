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

    
    </div>
  );
};

export default SidebarContent;
