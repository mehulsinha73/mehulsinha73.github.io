import { projectData } from "./data";
import { AnimateUpIntoView } from "@/components/animations/animate-up-into-view";
import { AnimateStagger } from "@/components/animations/animate-stagger";
import { ProjectCard } from "@/components/ui/project-card";

export default function Projects() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <p className="text-xl pb-5 text-center">
                    Projects
                </p>
            </AnimateUpIntoView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 justify-items-center">
                {projectData.map(project => (
                    <ProjectCard key={project.id} {...project}/>
                ))}
            </div>
        </AnimateStagger>
    );
}