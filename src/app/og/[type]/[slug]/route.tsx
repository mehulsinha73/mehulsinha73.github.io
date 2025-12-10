import { getAllPosts, getPost } from '@/lib/api';
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server';

export const dynamic = 'force-static'

type RouteParams = {
    type: string;
    slug: string;
}

export async function generateStaticParams() {
    const staticParams = [
        { type: "site", slug: "Mehul Sinha" },
        { type: "site", slug: "Experience" },
        { type: "site", slug: "Projects" },
        { type: "site", slug: "Blog" },
    ] satisfies RouteParams[];

    const posts = await getAllPosts()
    const postParams = posts.map(post => (
        { type: "post", slug: post.slug }
    )) satisfies RouteParams[];

    return [
        ...staticParams,
        ...postParams,
    ].map(param => ({
        type: param.type,
        slug: param.slug,
    })) satisfies RouteParams[];
}

export async function GET(request: NextRequest, {
    params
}: {
    params: Promise<{ type?: string; slug: string }>
}) {
    const { type, slug } = await params

    let title = slug
    if (type === 'post') {
        try {
            const post = await getPost(slug)
            if (post && post.data && post.data.title) {
                title = post.data.title
            }
        } catch (err) {
            // ignore and fall back to slug
        }
    } else if (type === 'site') {
        try {
            title = decodeURIComponent(slug)
        } catch (err) {
            // ignore and fall back to slug
        }
    }

    const subtitle = title !== 'Mehul Sinha' ? `Mehul Sinha` : ''

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
                tw='p-4'
            >
                <div tw="bg-gray-50 flex rounded-lg p-2">
                    {subtitle ? (
                        <div tw="flex flex-row flex-wrap w-full py-12 px-6 items-center justify-between">
                            <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-gray-900 text-left whitespace-normal wrap-break-word max-w-[65%]">
                                <span>{title}</span>
                            </h2>
                            <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-indigo-600 text-right whitespace-normal wrap-break-word max-w-[30%]">
                                <span>{subtitle}</span>
                            </h2>
                        </div>
                    ) : (
                        <div tw="flex flex-row w-full py-12 px-6 items-center justify-center">
                            <h2 tw="flex flex-col text-7xl font-bold tracking-tight text-indigo-600 text-center">
                                <span>{title}</span>
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}