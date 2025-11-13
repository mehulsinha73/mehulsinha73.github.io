import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
    return (
        <AnimateStagger className="space-y-5 text-justify">            
            <AnimateUpIntoView>
                <p>
                    Hi, I&apos;m
                    <Tooltip >
                        <TooltipTrigger asChild>
                            <b> Mehul.</b>
                        </TooltipTrigger>
                        <TooltipContent
                            className='[&_svg]:invisible bg-muted text-foreground'
                            side="right"
                        >
                            <p className="italic">
                                meaning: rain or cloud<br />
                                pronounced: may-huul
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </p>
            </AnimateUpIntoView>
            <AnimateUpIntoView>
                <p>
                    I&apos;m a software engineer specializing in building meaningful and exceptional digital experiences.
                    I have a wide range of interests spanning full-stack engineering, design, research, ai, and music.
                </p>
            </AnimateUpIntoView>
            <AnimateUpIntoView>
                <p>
                    Currently, I&apos;m working as a Full-Stack Software Engineer at&nbsp;
                    <Link
                        href="https://www.jpmorganchase.com/"
                        target="_blank" rel="noopener"
                        className="underline underline-offset-4"
                    >
                        JPMorgan Chase
                    </Link>, focusing on developing new products and user experiences.
                </p>
            </AnimateUpIntoView>
            <AnimateUpIntoView>
                <p>
                    I&apos;m always looking for cool new opportunities to enjoy myself, try new things, and make
                    some awesome stuff. If you&apos;ve got an exciting project or collaboration, I&apos;m all ears!
                </p>
            </AnimateUpIntoView>
        </AnimateStagger >
    );
}
