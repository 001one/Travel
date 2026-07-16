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
  metadataBase: new URL("https://neeotech.vercel.app"),
  title: "Linus Tech Tips Reviews | PC Hardware, Gaming & Tech Insights",
  description:
    "Trusted reviews and deep dives into PC hardware, gaming laptops, GPUs, CPUs, peripherals, and more. Stay ahead with expert insights, benchmarks, and honest product analysis.",
  keywords:
    "Linus Tech Tips Reviews, tech reviews, PC hardware, gaming laptops, GPUs, CPUs, peripherals, benchmark tests, build guides, gaming gear, graphics cards, processors, custom PC builds, best GPUs 2026, best CPUs 2026, hardware comparisons",
  openGraph: {
    title: "Linus Tech Tips Reviews | Honest Tech Reviews & Hardware Analysis",
    description:
      "Unbiased hardware reviews, performance benchmarks, and build guides — your ultimate destination for gaming and PC tech insights.",
    url: "https://neeotech.vercel.app",
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
  },
  alternates: {
    canonical: "https://neeotech.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased pt-24`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
