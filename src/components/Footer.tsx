import Link from "next/link";
import { Mail, Phone, Instagram, Facebook,   } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer  className="bg-gray-900 text-gray-300 py-10 mt-10 md:mt-20 mb-7">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">Get in Touch</h2>
            <p className="mt-2">
 Exploring the latest in tech innovation — honest reviews, hands-on tests, and real performance insights.
 </p>
    ,<br />
 <p className="mt-15">Tech reviews made simple ⚙️ | Gadgets, laptops & mobile innovations 💡 | Real opinions, no hype!</p>
      </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><Link href="#home" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="#home" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link href="#about" className="hover:text-blue-400">Services</Link></li>
              
              <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Me</h2>
            <p className="mt-2">Check out my latest designs and projects.</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/one_designer_1/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-2xl">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565883352327" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-2xl">
    <Facebook className="w-6 h-6" />
  </a>
       
            </div>
          </div>
        </div>
        
{/* Developer Credit */}
<div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-10 text-sm text-gray-400">
  <span>Website by</span>
  <a
    href="https://www.onedesignersdesign.com/webdesigner"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 hover:text-blue-400"
  >
    <Image
      src="/neeo-logo.png"
      alt="Neeo Designers Logo"
      width={20}
      height={20}
      className="rounded-full"
    />
     <span className="relative bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent animate-pulse">

      Neeo Designers
    </span>
    </a>
 
</div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Linus Tech Tips Reviews. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
