/** @type {import('next').NextConfig} */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/app1";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: true, // enable IP address change to expose to local network
  },
  webpack: (config, { isServer }) => {
    // Modify webpack configuration for file watching
    config.watchOptions = {
      poll: 10000, // Set the polling interval (milliseconds)
      aggregateTimeout: 300, // Delay before restarting the build after changes
    };

    return config;
  },
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  images: {
    loader: "default",
    path: `${BASE_PATH}/_next/image`,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

module.exports = nextConfig;

