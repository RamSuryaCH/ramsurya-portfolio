import path from "node:path";
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');
// Orchids restart: 1758873467023

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['slelguoygbfzlpylpxfs.supabase.co', 'images.unsplash.com'],
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