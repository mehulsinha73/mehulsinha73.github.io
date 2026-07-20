import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

type RouteParams = {
	type: string;
	slug: string;
};

export async function generateStaticParams() {
	const staticParams = [
		{ type: "site", slug: "Mehul Sinha" },
		{ type: "site", slug: "Experience" },
		{ type: "site", slug: "Projects" },
	] satisfies RouteParams[];

	return [...staticParams].map((param) => ({
		type: param.type,
		slug: param.slug,
	})) satisfies RouteParams[];
}

export async function GET(
	request: NextRequest,
	{
		params,
	}: {
		params: Promise<{ type?: string; slug: string }>;
	},
) {
	const { type, slug } = await params;

	let title = slug;
    if (type === "site") {
		try {
			title = decodeURIComponent(slug);
		} catch {
			// ignore and fall back to slug
		}
	}

	const isHome = title === "Mehul Sinha";
	const subtitle = isHome ? "Software Engineer • AI • ML" : "Mehul Sinha";

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				backgroundColor: "#ffffff",
				padding: 48,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "flex-end",
					width: "100%",
					height: "100%",
					borderRadius: 12,
					border: "2px solid #e5e5e5",
					padding: 64,
				}}
			>
				<h1
					style={{
						fontSize: 88,
						fontWeight: 700,
						letterSpacing: "-0.02em",
						color: "#171717",
						margin: 0,
					}}
				>
					{title}
				</h1>
				<p
					style={{
						fontSize: 36,
						color: "#737373",
						margin: 0,
						marginTop: 16,
					}}
				>
					{subtitle}
				</p>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
