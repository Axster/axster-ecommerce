/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
