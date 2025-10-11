import { EducationSlot } from "@/components/ui/education-slot";
import { educationSlotData, workSlotData } from "./data";
import { WorkSlot } from "@/components/ui/work-slot";
import { AnimatedBackground, AnimateStagger, AnimateUpIntoView } from "@/components/animations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience"
}

export default function Experience() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <div className="pb-3 justify-center flex">
                    <p className="text-xl hover:underline-offset-5 hover:underline">
                        Work
                    </p>
                </div>
            </AnimateUpIntoView>
            <AnimatedBackground
                enableHover
                className="rounded-md bg-sidebar"
                transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2,
                }}
            >
                {workSlotData.map((data) =>
                    <div key={data.id} data-id={data.id} className="flex flex-col">
                        <WorkSlot key={data.id} workSlotData={data} />
                    </div>
                )}
            </AnimatedBackground>
            <AnimateUpIntoView>
                <div className="pb-3 pt-7 justify-center flex">
                    <p className="text-xl hover:underline-offset-5 hover:underline">
                        Education
                    </p>
                </div>
            </AnimateUpIntoView>
            <AnimatedBackground
                enableHover
                className="rounded-md bg-sidebar"
                transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2,
                }}
            >
                {educationSlotData.map((data) =>
                    <div key={data.id} data-id={data.id} className="flex flex-col">
                        <EducationSlot educationSlotData={data} />
                    </div>
                )}
            </AnimatedBackground>
        </AnimateStagger>
    );
}

