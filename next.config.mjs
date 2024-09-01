/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.thecatapi.com',
      },
    ],
  },
};

export default nextConfig;
