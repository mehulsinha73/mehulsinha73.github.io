import { getAllPosts } from '@/lib/api';
import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export async function generateStaticParams() {

    const posts = await getAllPosts()
    const postTitles = posts.map(post => encodeURIComponent(post.data.title))
    return ["about", ...postTitles].map(slug => ({ slug }));
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const title = slug
    const subtitle = title !== 'Mehul Sinha' ? `Mehul Sinha` : ''

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    // backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3f4f6 75%), linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)',
                    // backgroundSize: '20px 20px',
                }}
            >
                <svg
                    width="1200"
                    height="630"
                    viewBox="0 0 1200 630"
                    fill="none"
                    stroke="black"
                >
                    <rect x="20" y="20" width="1160" height="590" />
                </svg>
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    fontSize: 50,
                    position: 'absolute',
                    top: 40,
                    left: 40,
                    bottom: 40,
                    right: 40,
                }}>{title}</div>
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    fontSize: 50,
                    position: 'absolute',
                    bottom: 40,
                    right: 40,

                }}>{subtitle}</div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}