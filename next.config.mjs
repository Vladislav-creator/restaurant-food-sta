/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    reactStrictMode: true,
    staticPageGenerationTimeout: 120,
};

export default nextConfig;
