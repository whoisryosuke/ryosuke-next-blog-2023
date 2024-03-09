const withMDX = require("@next/mdx")();

// The NextJS config defined separately
// Gets passed to next-offline
const nextConfig = {
  distDir: "build",
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  removeConsole: false,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  // Can be safely removed in newer versions of Next.js
  future: {
    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,
  },
  webpack(config, { isServer }) {
    // Fix `fs` missing in some cases
    // @see: https://stackoverflow.com/a/70995196
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };

    // Allow importing of shader files (e.g. `.glsl` -- filenames below)
    // @see: https://github.com/glslify/glslify-loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
};

module.exports = withMDX(nextConfig);
