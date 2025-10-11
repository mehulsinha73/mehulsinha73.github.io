import { cn } from "@/lib/utils";
import { syncopate, electrolize} from "@/styles/fonts";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animations";

export default function Header() {
    const Links = [
        { name: "About", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <header className="container mx-auto flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between h-40">
            <Link href="/" className={cn("text-5xl text-nowrap pl-1 sm:pl-0", electrolize.className)}>
                mehul sinha
            </Link>
            <nav className={cn("flex items-center mt-2 sm:mt-0", syncopate.className)}>
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
                            className="text-muted-foreground hover:text-foreground px-2 py-0.5"
                            href={link.href}
                            data-id={link.name}
                        >
                            {link.name}
                        </Link>
                    ))}
                </AnimatedBackground>
            </nav>
        </header>
    );
}