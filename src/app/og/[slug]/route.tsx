import { getAllPosts } from '@/lib/api';
import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export async function generateStaticParams() {
    const posts = await getAllPosts()
    const postTitles = posts.map(post => encodeURIComponent(post.data.title))

    return [
        encodeURIComponent("Mehul Sinha"),
        encodeURIComponent("Experience"),
        encodeURIComponent("Projects"),
        encodeURIComponent("Blog"),
        ...postTitles
    ].map(slug => ({ slug }));
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const title = slug
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