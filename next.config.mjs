/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftcc.org.au',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'filotechcommunity.files.wordpress.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;
