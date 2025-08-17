/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["files.edgestore.dev", "res.cloudinary.com"], // Add the Edge Store domain here
  },
};

export default nextConfig;
