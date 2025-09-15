import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { kodeMono } from "@/styles/fonts";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { TextEffect } from "@/components/animations/text-effect";

export default function Footer() {
    const CopyrightString: string = `© ${new Date().getFullYear().toString()} Mehul Sinha`
    const Links = [
        { name: "Mail", href: "mailto:mehulsinha73@gmail.com" },
        { name: "GitHub", href: "https://www.github.com/mehulsinha73" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/mehulsinha73" },
    ];

    return (
        <footer className={cn("relative mt-15 sm:mt-0", kodeMono.className)}>
            <nav className="items-center absolute sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
                <AnimatedBackground
                    className='rounded-md bg-muted'
                    transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.3,
                    }}
                    enableHover
                >
                    {Links.map((link) => (
                        <Link
                            key={link.name}
                            data-id={link.name}
                            className="text-sm text-muted-foreground hover:text-foreground px-2 py-0.5"
                            href={link.href}
                            target='_blank'
                            rel='noopener'
                        >
                            {link.name}
                        </Link>
                    ))}
                </AnimatedBackground>
            </nav>
            <div className="container mx-auto flex h-30 items-center justify-between">
                <TextEffect
                    as="p"
                    preset="fade"
                    per="char"
                    delay={0.4}
                    className="text-xs"
                >
                    {CopyrightString}
                </TextEffect>
                <ThemeToggle />
            </div>
        </footer>
    );
}
