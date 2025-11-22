import path from "node:path";
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');
// Orchids restart: 1761842060116

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['slelguoygbfzlpylpxfs.supabase.co'],
  },
  experimental: {
    turbo: {
      rules: {
        '*.tsx': {
          loaders: [LOADER],
        },
      },
    },
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;