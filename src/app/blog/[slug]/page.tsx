import { getAllPosts, getPost } from "@/lib/api";
import { getSiteUrl } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Toc } from "@/components/ui/table-of-components";
import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map(post => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) notFound()

    return {
        title: post.data.title,
        description: post.data.description,
        keywords: post.data.tags,
        openGraph: {
            type: "article",
            title: post.data.title,
            publishedTime: post.data.created.toString(),
            authors: ["Mehul Sinha"],
            description: post.data.description,
            url: `${getSiteUrl()}/blog/${post.slug}`,
            siteName: "Mehul Sinha",
            images: [
                {
                    url: `${getSiteUrl()}/og/post/${post.slug}`,
                    width: 1200,
                    height: 630,
                    alt: post.data.title,
                },
            ],
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: post.data.title,
            description: post.data.description,
            images: [
                {
                    url: `${getSiteUrl()}/og/post/${post.slug}`,
                    width: 1200,
                    height: 630,
                    alt: post.data.title,
                },
            ],
        },
        alternates: {
            canonical: `${getSiteUrl()}/blog/${post.slug}`,
        },
    }
}

export default async function Page(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) notFound()

    return (
        <AnimateStagger>
            <article className="container wrap-break-word space-y-35 text-justify">
                <AnimateUpIntoView>
                    <div className="space-y-5 text-balance">
                        <h1 className="text-3xl text-center">
                            <Link href={'#'}>
                                {post.data.title}
                            </Link>
                        </h1>
                        <div className="flex justify-between items-center text-muted-foreground ">
                            <p>
                                {post.scope.readingTime}
                            </p>
                            <time className="opacity-70 text-nowrap">
                                {new Date(post.data.created).toLocaleDateString("en-GB", {
                                    year: "2-digit",
                                    month: "short",
                                    day: "2-digit"
                                })}
                            </time>
                        </div>
                        {post.scope.toc && <Toc toc={post.scope.toc} />}
                    </div>
                </AnimateUpIntoView>
                <AnimateUpIntoView>
                    <div>
                        {post.content}
                    </div>
                </AnimateUpIntoView>
            </article>
        </AnimateStagger>
    )
}
