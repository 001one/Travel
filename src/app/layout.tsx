import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.linustechtipsreview.com"),
  title: "Linus Tech Tips Reviews | PC Hardware, Gaming & Tech Insights",
  description:
    "LinusTechTipsReview.com delivers trusted reviews and deep dives into PC hardware, gaming laptops, GPUs, CPUs, peripherals, and more. Stay ahead with expert insights, benchmarks, and honest product analysis from true tech enthusiasts.",
  keywords:
    "Linus Tech Tips Reviews, tech reviews, PC hardware, gaming laptops, GPUs, CPUs, peripherals, computer components, benchmark tests, build guides, gaming gear, performance analysis, graphics cards, processors, custom PC builds, best GPUs 2025, best CPUs 2025, hardware comparisons, overclocking, PC upgrades",
  openGraph: {
    title: "Linus Tech Tips Reviews | Honest Tech Reviews & Hardware Analysis",
    description:
      "Explore unbiased hardware reviews, performance benchmarks, and build guides at LinusTechTipsReview.com — your ultimate destination for gaming and PC tech insights.",
    url: "https://www.linustechtipsreview.com",
    type: "website",
    siteName: "Linus Tech Tips Reviews",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Linus Tech Tips Reviews - Tech Hardware Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Tech Tips Reviews | Trusted Tech & Hardware Reviews",
    description:
      "Stay informed with honest PC hardware and gaming reviews. LinusTechTipsReview.com covers GPUs, CPUs, laptops, peripherals, and more — from trusted tech reviewers.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.linustechtipsreview.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  mt-30`}
      >
          <Navbar />
        {children}
         {/* <Analytics /> */}
        <ScrollToTop />
       
        <Footer />

      </body>
    </html>
  );
}
