import { projectData } from "./data";
import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { ProjectCard } from "@/components/ui/project-card";
import { getSiteUrl } from "@/lib/utils";
import { Metadata } from "next";

const description =
	"Projects by Mehul Sinha — web apps, mobile apps, and AI/ML tools including mi·me·mo, Circles, Abodewave, and DescAI.";

export const metadata: Metadata = {
	title: "Projects",
	description,
	alternates: {
		canonical: "/projects",
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects • Mehul Sinha",
		description,
		images: [
			{
				url: `${getSiteUrl()}/og/site/Projects`,
				width: 1200,
				height: 630,
				alt: "Projects • Mehul Sinha",
			},
		],
	},
	openGraph: {
		type: "website",
		title: "Projects • Mehul Sinha",
		description,
		url: `${getSiteUrl()}/projects`,
		siteName: "Mehul Sinha",
		images: [
			{
				url: `${getSiteUrl()}/og/site/Projects`,
				width: 1200,
				height: 630,
				alt: "Projects • Mehul Sinha",
			},
		],
		locale: "en_US",
	},
};

export default function Projects() {
	return (
		<AnimateStagger>
			<AnimateUpIntoView>
				<h2 className="pb-7.5 justify-center flex text-lg sm:text-xl font-semibold">Projects</h2>
			</AnimateUpIntoView>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-items-center">
				{projectData.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</AnimateStagger>
	);
}
