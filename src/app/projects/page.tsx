import { SwapCard } from "@/components/ui/swap-card";
import { projectsData } from "./data";

export default function Projects() {
    return (
        <div>
            <p className="text-xl pb-5 text-center">
                Projects
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 place-items-center">
                {projectsData.map(project => (
                    <SwapCard key={project.id} swapCardData={project} />
                ))}
            </div>
        </div>
    );
}