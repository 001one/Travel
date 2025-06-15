import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: [
      'images.unsplash.com',  // for Unsplash
      'cdn.pixabay.com',      // for Pixabay
      'placekitten.com',      // example
      'your-custom-domain.com'
    ],
  },
};

export default nextConfig;
