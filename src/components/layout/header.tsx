import { cn } from "@/lib/utils";
import { babylonica, syncopate } from "@/styles/fonts";
import Link from "next/link";

export default function Header() {
    return (
        <header className="container mx-auto flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between h-40">
            <Link href="/" className={cn("text-5xl", babylonica.className)}>
                Mehul Sinha
            </Link>
            <nav className={cn("flex gap-5 items-center mt-2 sm:mt-0", syncopate.className)}>
                <Link className="text-muted-foreground hover:text-foreground" href="/about">
                    About
                </Link>
                <Link className="text-muted-foreground hover:text-foreground" href="/experience">
                    Experience
                </Link>
                <Link className="text-muted-foreground hover:text-foreground" href="/projects">
                    Projects
                </Link>
            </nav>
        </header>
    );
}