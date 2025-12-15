import { AnimatedBackground, AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { getAllPosts } from "@/lib/api";
import { getSiteUrl } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    twitter: {
        card: "summary_large_image",
        title: "Mehul Sinha",
        description: "Personal website of Mehul Sinha, a software engineer based in Bengaluru, India.",
        images: [
            {
                url: `${getSiteUrl()}/og/site/Blog`,
                width: 1200,
                height: 630,
                alt: "Mehul Sinha",
            },
        ],
    },
    openGraph: {
        type: 'website',
        title: "Mehul Sinha",
        description: "Personal website of Mehul Sinha, a software engineer based in Bengaluru, India.",
        url: `${getSiteUrl()}/blog`,
        siteName: 'Mehul Sinha',
        images: [
            {
                url: `${getSiteUrl()}/og/site/Blog`,
                width: 1200,
                height: 630,
                alt: "Mehul Sinha",
            },
        ],
        locale: 'en_US',
    },
}

export default async function Blog() {
    const posts = await getAllPosts()

    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <div className="pb-7.5 justify-center flex">
                    <p className="text-xl hover:underline-offset-5 hover:underline">
                        Blog
                    </p>
                </div>
            </AnimateUpIntoView>
            <AnimateUpIntoView>
                <ul className="space-y-1">
                    <AnimatedBackground
                        enableHover
                        className="rounded-md bg-sidebar"
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.2,
                        }}
                    >
                        {posts.map(post => {
                            return (
                                <li key={post.slug} data-id={post.slug} className="flex flex-col p-2 px-3">
                                    <Link href={`/blog/${post.slug}`} className="">
                                        <div className="flex justify-between items-center w-full">
                                            <span className="">{post.data.title}</span>
                                            <time className="opacity-70 text-nowrap">
                                                {new Date(post.data.created).toLocaleDateString("en-GB", {
                                                    year: "2-digit",
                                                    month: "short",
                                                    day: "2-digit"
                                                })}
                                            </time>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </AnimatedBackground>
                </ul>
            </AnimateUpIntoView>
        </AnimateStagger>
    );
}

