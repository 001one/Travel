import Carousel from "@/components/Carousel";
import CategorySidebar from "@/components/CategorySidebar";
import FAQSection from "@/components/FAQSection";
import FeaturedServices from "@/components/FeaturedServices";
import FlowerShopSection from "@/components/FlowerShopSection";
import PostsList from "@/components/PostList";
import SidebarContent from "@/components/sidebarcontent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 ">
   <div className="hidden lg:flex justify-between items-start gap-6 mb-8  bg-gradient-to-b from-white via-[#79f5e5] to-[#ffffff]">
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
      <h1 className="font-bold flex justify-center text-6xl mt-5 bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
        FLORIST IN  NAIROBI KENYA
      </h1>
        <FeaturedServices />
         <div>
        <PostsList />
      </div>

       <section>
        <FAQSection />
        <FlowerShopSection/>
       
      </section>

      
      
      </main>
  );
}
