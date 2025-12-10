import { projectData } from "./data";
import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { ProjectCard } from "@/components/ui/project-card";
import { getSiteUrl } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    twitter: {
        card: "summary_large_image",
        title: "Mehul Sinha",
        description: "Personal website of Mehul Sinha, a software engineer based in Bengaluru, India.",
        images: [
            {
                url: `${getSiteUrl()}/og/site/Projects`,
                width: 1200,
                height: 630,
                alt: "Mehul Sinha",
            },
        ],
    },
    openGraph: {
        type: 'website',
        title: "Mehul Sinha",
        description: "Personal website of Mehul Sinha, a software engineer based in Bengaluru, India.",
        url: `${getSiteUrl()}/projects`,
        siteName: 'Mehul Sinha',
        images: [
            {
                url: `${getSiteUrl()}/og/site/Projects`,
                width: 1200,
                height: 630,
                alt: "Mehul Sinha",
            },
        ],
        locale: 'en_US',
    },
}

export default function Projects() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <div className="pb-7.5 justify-center flex">
                    <p className="text-xl hover:underline-offset-5 hover:underline">
                        Projects
                    </p>
                </div>
            </AnimateUpIntoView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-items-center">
                {projectData.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </AnimateStagger>
    );
}