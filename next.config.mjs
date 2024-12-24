/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.thecatapi.com',
      },
      {
        hostname: 'cdn.bsky.app',
      },
      {
        hostname: '*.ionicargon.ca',
      },
    ],
  },
};

export default nextConfig;
