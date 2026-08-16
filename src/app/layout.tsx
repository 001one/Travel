import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://linustectips.com"),
  title: "Linus Tech Tips Reviews | PC Hardware, Gaming & Tech Insights",
  description:
    "Trusted reviews and deep dives into PC hardware, gaming laptops, GPUs, CPUs, peripherals, and more. Stay ahead with expert insights, benchmarks, and honest product analysis.",
  keywords:
    "Linus Tech Tips Reviews, tech reviews, PC hardware, gaming laptops, GPUs, CPUs, peripherals, benchmark tests, build guides, gaming gear, graphics cards, processors, custom PC builds, best GPUs 2026, best CPUs 2026, hardware comparisons",
  verification: {
    google: "paste-your-verification-code-here",
  },
  openGraph: {
    title: "Linus Tech Tips Reviews | Honest Tech Reviews & Hardware Analysis",
    description:
      "Unbiased hardware reviews, performance benchmarks, and build guides — your ultimate destination for gaming and PC tech insights.",
    url: "https://linustectips.com",
    type: "website",
    siteName: "Linus Tech Tips Reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Tech Tips Reviews | Trusted Tech & Hardware Reviews",
    description:
      "Honest PC hardware and gaming reviews covering GPUs, CPUs, laptops, peripherals, and more.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://linustectips.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Linus Tech Tips Review" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />

        {/* Canonical */}
        <link rel="canonical" href="https://linustectips.com" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3715756696954182"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://linustectips.com",
                  url: "https://linustectips.com",
                  name: "Linus Tech Tips Reviews",
                  description:
                    "Honest PC hardware reviews, benchmarks, and build guides.",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://linustectips.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://linustectips.com/#organization",
                  name: "Linus Tech Tips Reviews",
                  url: "https://linustectips.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://linustectips.com/logo.png",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://linustectips.com",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Tech Categories",
                      item: "https://linustectips.com/categories",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased pt-24`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
