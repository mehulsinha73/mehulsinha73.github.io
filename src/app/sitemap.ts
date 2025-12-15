import { getAllPosts } from '@/lib/api';
import { getSiteUrl } from '@/lib/utils';
import type { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages = [
        {
            url: getSiteUrl(),
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${getSiteUrl()}/experience`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${getSiteUrl()}/projects`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${getSiteUrl()}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ] as MetadataRoute.Sitemap;

    const blogPosts = await getAllPosts();

    const blogPages = blogPosts.map((post) => ({
        url: `${getSiteUrl()}/blog/${post.slug}`,
        lastModified: new Date(post.data.lastModified || post.data.created),
        changeFrequency: 'daily',
        priority: 0.7,
    })) as MetadataRoute.Sitemap;

    return [
        ...staticPages,
        ...blogPages,
    ];
}