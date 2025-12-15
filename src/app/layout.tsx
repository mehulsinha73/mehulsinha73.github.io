import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ibmPlexMono } from "@/styles/fonts";
import { cn, getSiteUrl } from "@/lib/utils";

export const metadata: Metadata = {
    title: {
        template: '%s • Mehul Sinha',
        default: 'Mehul Sinha',
    },
    applicationName: "Mehul Sinha",
    description: "Personal website of Mehul Sinha, a software engineer based in Bengaluru, India.",
    metadataBase: new URL(getSiteUrl()),
    keywords: ["Mehul Sinha", "Mehul", "Sinha", "Software Developer", "Software Engineer", "AI", "Porfolio"],
    creator: "Mehul Sinha",
    twitter: {
        card: "summary_large_image",
        title: "Mehul Sinha",
        description: "Personal website of Mehul Sinha, a software engineer based in Bengaluru, India.",
        images: [
            {
                url: `${getSiteUrl()}/og/site/Mehul Sinha`,
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
        url: new URL(getSiteUrl()),
        siteName: 'Mehul Sinha',
        images: [
            {
                url: `${getSiteUrl()}/og/site/Mehul Sinha`,
                width: 1200,
                height: 630,
                alt: "Mehul Sinha",
            },
        ],
        locale: 'en_US',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    appleWebApp: {
        title: "Mehul Sinha",
        capable: true,
    },
    verification: {
        google: 'wKsQ5_aJCVmsM1mXoAyS4KzUAaP63HGAe_MEBXXtY6o',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="container mx-auto max-w-3xl px-5 flex flex-col min-h-screen">
                        <Header />
                        <main
                            className={cn(
                                "flex-1 py-10 mx-auto container items-center justify-between",
                                ibmPlexMono.className
                            )}>
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
