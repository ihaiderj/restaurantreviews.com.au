/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co', 'images.unsplash.com'],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // ... rest of your existing configuration
};

export default nextConfig;
