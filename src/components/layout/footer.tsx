import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { kodeMono } from "@/styles/fonts";
import { TextEffect } from "@/components/animations";
import SocialLinks from "@/components/layout/socials";

export default function Footer() {
    const CopyrightString: string = `© ${new Date().getFullYear().toString()} Mehul Sinha`

    return (
        <footer className={cn("relative mt-15 sm:mt-0", kodeMono.className)}>
            <nav className="items-center absolute sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
                <SocialLinks />
            </nav>
            <div className="container mx-auto flex h-20 items-center justify-between">
                <TextEffect
                    as="p"
                    preset="blur"
                    per="char"
                    delay={0.2}
                    className="text-xs"
                >
                    {CopyrightString}
                </TextEffect>
                <ThemeToggle />
            </div>
        </footer>
    );
}
