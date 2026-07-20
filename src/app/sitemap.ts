import { getSiteUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticPages = [
		{
			url: getSiteUrl(),
            lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${getSiteUrl()}/experience`,
            lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${getSiteUrl()}/projects`,
            lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	] as MetadataRoute.Sitemap;

	return [...staticPages];
}
