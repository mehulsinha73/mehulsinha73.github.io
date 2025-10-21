import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About"
}

export default function About() {
    return (
        <AnimateStagger className="space-y-5 text-justify">
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
                        className="underline underline-offset-4 "
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
        </AnimateStagger>
    );
}

