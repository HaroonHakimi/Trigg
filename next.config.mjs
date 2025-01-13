/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent-ord5-3.cdninstagram.com'
            }
        ]
    }
};

export default nextConfig;
