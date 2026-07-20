import { EducationSlot } from "@/components/ui/education-slot";
import { educationSlotData, workSlotData } from "./data";
import { WorkSlot } from "@/components/ui/work-slot";
import { AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { Metadata } from "next";
import { getSiteUrl } from "@/lib/utils";

const description =
	"Work experience and education of Mehul Sinha — MS Computer Science at University of Southern California, previously at JPMorgan Chase.";

export const metadata: Metadata = {
	title: "Experience",
	description,
	alternates: {
		canonical: "/experience",
	},
	twitter: {
		card: "summary_large_image",
		title: "Experience • Mehul Sinha",
		description,
		images: [
			{
				url: getSiteUrl("/og/site/Experience"),
				width: 1200,
				height: 630,
				alt: "Experience • Mehul Sinha",
			},
		],
	},
	openGraph: {
		type: "website",
		title: "Experience • Mehul Sinha",
		description,
		url: getSiteUrl("/experience"),
		siteName: "Mehul Sinha",
		images: [
			{
				url: getSiteUrl("/og/site/Experience"),
				width: 1200,
				height: 630,
				alt: "Experience • Mehul Sinha",
			},
		],
		locale: "en_US",
	},
};

export default function Experience() {
	return (
		<AnimateStagger>
			<AnimateUpIntoView>
				<h2 className="pb-3 justify-center flex text-lg sm:text-xl font-semibold">Work</h2>
			</AnimateUpIntoView>
			<div className="flex flex-col">
				{workSlotData.map((data) => (
					<WorkSlot key={data.id} workSlotData={data} />
				))}
			</div>
			<AnimateUpIntoView>
				<h2 className="pb-3 pt-7 justify-center flex text-lg sm:text-xl font-semibold">
					Education
				</h2>
			</AnimateUpIntoView>
			<div className="flex flex-col">
				{educationSlotData.map((data) => (
					<EducationSlot key={data.id} educationSlotData={data} />
				))}
			</div>
		</AnimateStagger>
	);
}
