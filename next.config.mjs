/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** Enable MDX support */
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm,remarkFrontmatter,remarkMdxFrontmatter],
        // 👇 point to our server-safe provider (path is relative to project root)
        providerImportSource: '@/mdx-components.js',
    },
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '1drv.ms',
            },
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
