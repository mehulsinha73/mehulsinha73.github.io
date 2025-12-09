import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedBackground } from "@/components/animations";
import Link from "next/link";
import { kodeMono } from "@/styles/fonts";

export default function SocialLinks() {
    const Links = [
        {
            name: "Mail",
            href: "mailto:mehulsinha73@gmail.com",
            icon: <MailIcon />,
            tooltip: "Send me a mail"
        },
        {
            name: "GitHub",
            href: "https://www.github.com/mehulsinha73",
            icon: <GithubIcon />,
            tooltip: "Check out my GitHub"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/sinha-mehul",
            icon: <LinkedinIcon />,
            tooltip: "Connect on LinkedIn"
        },
    ];

    return (
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
                <div key={link.name} data-id={link.name}>
                    <Tooltip >
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-sm text-muted-foreground hover:text-foreground px-2 py-0.5"
                                asChild
                            >
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel='noopener'
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className='[&_svg]:invisible bg-muted text-foreground'>
                            <p className={kodeMono.className}>
                                {link.tooltip}
                            </p>
                        </TooltipContent>
                    </Tooltip></div>
            ))}
        </AnimatedBackground>
    );
}