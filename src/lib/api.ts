import fs from "fs";
import { join } from "path";
import { evaluate, EvaluateOptions } from "next-mdx-remote-client/rsc";
import readingTime from "reading-time"

import remarkFlexibleToc from "remark-flexible-toc";
import remarkGfm from 'remark-gfm'
import remarkFlexibleContainers from 'remark-flexible-containers';
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkIns from "remark-ins";
import rehypeImageToolkit from "rehype-image-toolkit";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeShiki from '@shikijs/rehype'

import { useMDXComponents } from "@/mdx-components";
import { Frontmatter, Post, Scope } from "@/lib/types";


const blogDirectory = join(process.cwd(), "content/blog");

export function getBlogSlugs() {
    return fs.readdirSync(blogDirectory);
}

export async function getPost(slug: string | null): Promise<Post | null> {
    if (!slug || typeof slug !== "string") {
        console.warn("getPost: called with empty or non-string slug", slug);
        return null;
    }

    const realSlug = slug.replace(/\.mdx?$/, "");
    const fullPath = join(blogDirectory, `${realSlug}.mdx`);

    try {
        const source = await fs.promises.readFile(fullPath, 'utf8')

        const options: EvaluateOptions<Scope> = {
            mdxOptions: {
                remarkPlugins: [
                    remarkGfm,
                    remarkIns,
                    [remarkFlexibleToc, { skipLevels: [], maxDepth: 3 }],
                    remarkFlexibleContainers,
                    remarkFlexibleMarkers,
                ],
                rehypePlugins: [
                    rehypeImageToolkit,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    [rehypeShiki, {
                        themes: {
                            light: 'github-light',
                            dark: 'github-dark',
                        }
                    }]
                ]
            },
            parseFrontmatter: true,
            scope: {
                readingTime: readingTime(source).text,
            },
            vfileDataIntoScope: "toc",
        };

        const { content, frontmatter, scope, error } = await evaluate<Frontmatter, Scope>({
            source,
            options,
            components: useMDXComponents(),
        });

        if (error) {
            console.warn("getPost: MDX evaluation error for slug", slug, error);
        }

        return {
            slug: realSlug,
            content: content,
            data: frontmatter,
            scope: scope,
        };
    } catch {
        console.warn("getPost: could not read post for slug", slug);
        return null;
    }
}

export async function getAllPosts(): Promise<Post[]> {
    const slugs = getBlogSlugs();
    const posts = await Promise.all(slugs.map((slug) => getPost(slug)));
    const validPosts = posts.filter((p): p is Post => p !== null && p.data.published === true);
    validPosts.sort((a, b) => (new Date(a.data.created) > new Date(b.data.created) ? -1 : 1));
    return validPosts;
}