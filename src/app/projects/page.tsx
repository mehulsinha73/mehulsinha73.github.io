import { projectData } from "./data";
import { AnimateUpIntoView } from "@/components/animations/animate-up-into-view";
import { AnimateStagger } from "@/components/animations/animate-stagger";
import { ProjectCard } from "@/components/ui/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects"
}

export default function Projects() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <p className="text-xl pb-5 text-center hover:underline-offset-4 hover:underline">
                    Projects
                </p>
            </AnimateUpIntoView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-items-center">
                {projectData.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </AnimateStagger>
    );
}