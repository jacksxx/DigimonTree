/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digimon.shadowsmith.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "digi-api.com",
        pathname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
