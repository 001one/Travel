import Carousel from "@/components/Carousel";
import CategorySidebar from "@/components/CategorySidebar";

import FeaturedServices from "@/components/FeaturedServices";

import PostsList from "@/components/PostList";
import SidebarContent from "@/components/sidebarcontent";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Linus Tech Tips Reviews | Honest PC Hardware & Tech Reviews",
  description:
    "Get expert insights and unbiased reviews of the latest PC hardware, gaming gear, laptops, GPUs, CPUs, and peripherals. LinusTechTipsReview.com delivers detailed benchmarks, build guides, and honest opinions from the world of tech enthusiasts.",
  keywords:
    "tech reviews, PC hardware, gaming gear, computer components, Linus Tech Tips, GPU benchmarks, CPU reviews, custom PC builds, peripherals, monitors, gaming laptops, tech news, performance tests, tech comparisons, build guides, PC upgrades, best graphics cards, best CPUs 2025, hardware analysis",
  openGraph: {
    title: "Linus Tech Tips Reviews | Your Source for Honest Tech Insights",
    description:
      "Explore in-depth PC hardware and tech reviews from LinusTechTipsReview.com — covering GPUs, CPUs, gaming laptops, peripherals, and more. Trusted analysis and performance breakdowns for every tech enthusiast.",
    url: "https://linustechtipsreview.com",
    type: "website",
    images: [
      {
        url: "https://linustechtipsreview.com/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Linus Tech Tips Reviews - Honest Hardware Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Tech Tips Reviews | Expert Hardware & Tech Analysis",
    description:
      "Stay up to date with the latest hardware reviews, benchmarks, and tech breakdowns. LinusTechTipsReview.com delivers trusted insights for gamers and PC enthusiasts.",
    images: ["https://linustechtipsreview.com/preview-image.png"],
  },
};


export default function Home() {
  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 ">
   <div className="hidden lg:flex justify-between items-start gap-6 mb-8  bg-gradient-to-b from-white via-[#da7312] to-[#ffffff]">
        {/* Left Sidebar (Dynamic Categories) */}
        <div className="w-1/4">
          <CategorySidebar />
        </div>

        {/* Center - Carousel */}
        <div className="w-1/2 flex justify-center">
          <Carousel />
        </div>

        {/* Right Sidebar (Additional Content) */}
        <div className="w-1/4">
          <SidebarContent />
        </div>
      </div>

      {/* Carousel for Small Screens */}
      <div className="lg:hidden flex justify-center">
        <Carousel />
      </div>

      {/* Title Section */}
      <h1 className="font-bold flex justify-center md:text-6xl text-3xl mt-5 bg-gradient-to-r from-orange-600 to-amber-300  bg-clip-text text-transparent">
        ALL ABOUT TECH
      </h1>
        <FeaturedServices />
         <div>
        <PostsList />
      </div>

       <section>
     
     
       
      </section>

      
      
      </main>
  );
}
