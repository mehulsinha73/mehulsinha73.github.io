import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
                    Welcome to my portfolio!
                </p>
            </AnimateUpIntoView>
        </AnimateStagger >
    );
}
