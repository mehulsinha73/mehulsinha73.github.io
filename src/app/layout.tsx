import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ibmPlexMono } from "@/styles/fonts";
import { cn, getSiteUrl } from "@/lib/utils";

export const metadata: Metadata = {
	title: {
		template: "%s • Mehul Sinha",
		default: "Mehul Sinha",
	},
	applicationName: "Mehul Sinha",
	description:
		"Personal website of Mehul Sinha, a software engineer based in Los Angeles, CA.",
	metadataBase: new URL(getSiteUrl()),
	alternates: {
		canonical: "/",
	},
	creator: "Mehul Sinha",
	authors: [{ name: "Mehul Sinha", url: getSiteUrl() }],
	twitter: {
		card: "summary_large_image",
		title: "Mehul Sinha",
		description:
			"Personal website of Mehul Sinha, a software engineer based in Los Angeles, CA.",
		images: [
			{
				url: getSiteUrl("/og/site/Mehul Sinha"),
				width: 1200,
				height: 630,
				alt: "Mehul Sinha",
			},
		],
	},
	openGraph: {
		type: "website",
		title: "Mehul Sinha",
		description:
			"Personal website of Mehul Sinha, a software engineer based in Los Angeles, CA.",
		url: new URL(getSiteUrl()),
		siteName: "Mehul Sinha",
		images: [
			{
				url: getSiteUrl("/og/site/Mehul Sinha"),
				width: 1200,
				height: 630,
				alt: "Mehul Sinha",
			},
		],
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	appleWebApp: {
		title: "Mehul Sinha",
		capable: true,
	},
	verification: {
		google: "wKsQ5_aJCVmsM1mXoAyS4KzUAaP63HGAe_MEBXXtY6o",
	},
};

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Mehul Sinha",
	givenName: "Mehul",
	familyName: "Sinha",
	url: getSiteUrl(),
	jobTitle: "Software Engineer",
    description: "Personal website of Mehul Sinha, a software engineer based in Los Angeles, CA.",
	gender: "Male",
	knowsAbout: [
		"Software Engineering",
		"Artificial Intelligence",
		"Machine Learning",
	],
	address: {
		"@type": "PostalAddress",
		addressLocality: "Los Angeles",
		addressRegion: "CA",
		addressCountry: "USA",
	},
	alumniOf: [
		{
			"@type": "CollegeOrUniversity",
			name: "University of Southern California",
		},
		{
			"@type": "CollegeOrUniversity",
			name: "Manipal University",
		},
	],
	sameAs: [
		"https://www.github.com/mehulsinha73",
		"https://www.linkedin.com/in/mehulsinha73",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("antialiased", ibmPlexMono.className)}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="container mx-auto max-w-3xl px-5 flex flex-col min-h-screen">
						<Header />
						<main className="flex-1 py-10 mx-auto container items-center justify-between">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
