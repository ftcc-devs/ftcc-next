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
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'ftcc-public.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
