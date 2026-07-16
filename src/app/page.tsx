import Carousel from "@/components/Carousel";
import CategorySidebar from "@/components/CategorySidebar";
import FeaturedServices from "@/components/FeaturedServices";
import PostsList from "@/components/PostList";
import SidebarContent from "@/components/sidebarcontent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linus Tech Tips Reviews | Honest PC Hardware & Tech Reviews",
  description:
    "Expert insights and unbiased reviews of the latest PC hardware, gaming gear, laptops, GPUs, CPUs, and peripherals. Detailed benchmarks, build guides, and honest opinions.",
  keywords:
    "tech reviews, PC hardware, gaming gear, GPU benchmarks, CPU reviews, custom PC builds, peripherals, gaming laptops, best graphics cards, best CPUs 2026, hardware analysis",
  openGraph: {
    title: "Linus Tech Tips Reviews | Your Source for Honest Tech Insights",
    description:
      "In-depth PC hardware and tech reviews covering GPUs, CPUs, gaming laptops, peripherals, and more.",
    url: "https://neeotech.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Tech Tips Reviews | Expert Hardware & Tech Analysis",
    description:
      "Latest hardware reviews, benchmarks, and tech breakdowns for gamers and PC enthusiasts.",
  },
};

export default function Home() {
  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Hero Section - Desktop */}
      <div className="hidden lg:flex justify-between items-start gap-6 mb-8 bg-gradient-to-b from-white via-orange-100 to-white rounded-xl p-4">
        <div className="w-1/4">
          <CategorySidebar />
        </div>
        <div className="w-1/2 flex justify-center">
          <Carousel />
        </div>
        <div className="w-1/4">
          <SidebarContent />
        </div>
      </div>

      {/* Carousel - Mobile */}
      <div className="lg:hidden flex justify-center mb-6">
        <Carousel />
      </div>

      {/* Title */}
      <h1 className="font-bold flex justify-center md:text-6xl text-3xl mt-5 mb-2 bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent">
        ALL ABOUT TECH
      </h1>

      <FeaturedServices />
      <PostsList />
    </main>
  );
}
