/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };
    config.module.rules.push(
      {
        test: /\.(svg)$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(mp3)$/i, // Look for any file with the prefix `.mp3`
        use: [
          {
            loader: "file-loader", // Installed /w npm i file-loader
            options: {
              name: "[name].[ext]", // Specify the output file name
              publicPath: "/_next/static/", // Specify the public path for the file
              outputPath: "static/", // Specify the output path for the file
            },
          },
        ],
      }
    );

    return config;
  },

  // Add images configuration
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], // Add your domain here
  },
};

module.exports = nextConfig;
