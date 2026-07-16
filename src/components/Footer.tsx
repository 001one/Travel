import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Tech Categories", href: "/videos" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const categories = [
    { name: "GPUs & CPUs", href: "/category/gpus-cpus" },
    { name: "Laptops", href: "/category/laptops" },
    { name: "Phones", href: "/category/phones" },
    { name: "TVs & Monitors", href: "/category/tvs-monitors" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 mt-10 md:mt-20 mb-7 rounded-xl mx-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Linus Tech Tips Review Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-white text-sm leading-tight">
                LINUS TECH TIPS
                <br />
                REVIEW
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Honest tech reviews, real benchmarks, and no hype. We help you
              make smarter buying decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              About the Blog
            </h3>
            <p className="text-sm leading-relaxed">
              We cover GPUs, CPUs, laptops, phones, and everything in between.
              Our goal is straightforward — cut through the marketing and tell
              you what actually matters.
            </p>
            <p className="text-sm mt-3">
              ⚙️ Real tests &nbsp;·&nbsp; 💡 Expert picks &nbsp;·&nbsp; 🚫 No
              paid reviews
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Linus Tech Tips Review. All Rights
            Reserved.
          </p>

          <a
            href="https://www.onedesignersdesign.com/webdesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Image
              src="/neeo-logo.png"
              alt="Neeo Designers"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span>Built by Neeo Designers</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
