/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftcc.org.au',
        port: '',
        pathname: '',
      },
    ],
  },
};

export default nextConfig;
