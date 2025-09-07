import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { kodeMono } from "@/styles/fonts";

export default function Footer() {

    return (
        <footer className={cn("relative", kodeMono.className)}>
            <nav className="gap-4 items-center absolute sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
                <Link className="text-sm text-muted-foreground hover:text-foreground" href="mailto:mehulsinha73@gmail.com">
                    Mail
                </Link>
                <Link className="text-sm text-muted-foreground hover:text-foreground" href="https://www.github.com/mehulsinha73">
                    GitHub
                </Link>
                <Link className="text-sm text-muted-foreground hover:text-foreground" href="https://www.linkedin.com/in/mehulsinha73">
                    LinkedIn
                </Link>
            </nav>
            <div className="container mx-auto flex h-30 items-center justify-between">
                <div className="text-xs">© 2025 Mehul Sinha</div>
                <ThemeToggle />
            </div>
        </footer>
    );
}
