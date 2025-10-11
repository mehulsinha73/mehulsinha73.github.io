import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";

export default function Home() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <p className="text-lg pt-30">
                    Hey there!
                </p>
                <br />
                <p>
                    I&apos;m Mehul Sinha, a software developer specializing in building exceptional digital experiences.
                </p>
                <br />
                <p>
                    Welcome to my portfolio!
                </p>
            </AnimateUpIntoView>
        </AnimateStagger>
    );
}
