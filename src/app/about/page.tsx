import { AnimateStagger } from "@/components/animations/animate-stagger";
import { AnimateUpIntoView } from "@/components/animations/animate-up-into-view"
import Image from "next/image"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About"
}

export default function About() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <Image
                    src="https://placehold.co/900x400"
                    alt="Mehul Sinha"
                    width={800}
                    height={400}
                    className="object-contain w-fit rounded text-xs"
                    loading="eager"
                />
                <br />
                <p>
                    I&apos;m Mehul Sinha, a software developer specializing in building exceptional digital experiences.
                </p>
                <br />
                <p>
                    Welcome to my portfolio!
                </p>
                <br />
                <br />
            </AnimateUpIntoView>
        </AnimateStagger>
    );
}

