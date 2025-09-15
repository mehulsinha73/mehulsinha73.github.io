import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { luxuriousRoman } from "@/styles/fonts";
import { cn, getSiteUrl } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Mehul Sinha",
    applicationName: "Mehul Sinha",
    description: "Mehul Sinha's Portfolio",
    metadataBase: new URL(getSiteUrl()),
    keywords: ["Mehul Sinha", "Porfolio", "Resume", "Software Developer", "Software Engineer"],
    creator: "Mehul Sinha",
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
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
                                "flex-1 sm:py-10 mx-auto container items-center justify-between",
                                luxuriousRoman.className
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
