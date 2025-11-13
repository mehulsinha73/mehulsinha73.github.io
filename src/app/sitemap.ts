import { getSiteUrl } from '@/lib/utils';
import type { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: getSiteUrl(),
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: getSiteUrl() + "/experience",
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: getSiteUrl() + "/projects",
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ]
}