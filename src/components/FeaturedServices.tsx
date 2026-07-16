import { Cpu, Gauge, ShieldCheck } from "lucide-react";

export default function FeaturedServices() {
  const features = [
    {
      icon: Cpu,
      color: "text-blue-500",
      bg: "bg-blue-50",
      title: "In-Depth Hardware Reviews",
      description:
        "From GPUs to CPUs, we break down specs, benchmarks, and real-world performance so you know exactly what you're getting.",
    },
    {
      icon: Gauge,
      color: "text-orange-500",
      bg: "bg-orange-50",
      title: "Real Benchmark Tests",
      description:
        "No synthetic scores only. We test hardware under actual gaming and workload conditions to give you accurate results.",
    },
    {
      icon: ShieldCheck,
      color: "text-green-500",
      bg: "bg-green-50",
      title: "Honest & Unbiased Opinions",
      description:
        "No sponsored bias. Every review is independent — we tell you what's worth buying and what to skip.",
    },
  ];

  return (
    <div className="mt-10 mb-6 hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, color, bg, title, description }) => (
          <div
            key={title}
            className="p-6 bg-white shadow-sm border border-gray-100 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
          >
            <div className={`${bg} p-3 rounded-full`}>
              <Icon className={`${color} w-7 h-7`} />
            </div>
            <h3 className="text-base font-semibold mt-4 text-gray-800">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
