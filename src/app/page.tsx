import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
	return (
		<AnimateStagger className="space-y-5 text-justify text-sm sm:text-base">
			<AnimateUpIntoView>
				<p>
					Hi, I&apos;m
					<Tooltip>
						<TooltipTrigger>
							<b>&nbsp;Mehul.</b>
						</TooltipTrigger>
						<TooltipContent
							className="[&_svg]:invisible bg-muted text-foreground"
							side="right"
						>
							<p className="italic">
								pronounced: may-huul
							</p>
						</TooltipContent>
					</Tooltip>
				</p>
			</AnimateUpIntoView>
			<AnimateUpIntoView>
				<p>
					I&apos;m a first year MS in Computer Science student at the&nbsp;
					<Link
						href="https://www.usc.edu/"
						target="_blank"
						rel="noopener"
						className="underline underline-offset-4"
					>
						University of Southern California
					</Link>
					. Prior to joining USC, I worked as a Software Engineer at&nbsp;
					<Link
						href="https://www.jpmorganchase.com/"
						target="_blank"
						rel="noopener"
						className="underline underline-offset-4"
					>
						JPMorgan Chase
					</Link>
					, developing new products and user experiences.
				</p>
			</AnimateUpIntoView>
			<AnimateUpIntoView>
				<p>
					I&apos;m a software engineer specializing in building meaningful and
					exceptional digital experiences. I&apos;m passionate about software,
					ai, research, design and music.
				</p>
			</AnimateUpIntoView>
			<AnimateUpIntoView>
				<p>
					I&apos;m always looking for cool new opportunities to enjoy myself,
					try new things, and make some awesome stuff. If you&apos;ve got an
					exciting project or collaboration, I&apos;m all ears!
				</p>
			</AnimateUpIntoView>
		</AnimateStagger>
	);
}
