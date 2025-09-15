import { EducationSlot } from "@/components/ui/education-slot";
import { educationSlotData, workSlotData } from "./data";
import { WorkSlot } from "@/components/ui/work-slot";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { AnimateStagger } from "@/components/animations/animate-stagger";
import { AnimateUpIntoView } from "@/components/animations/animate-up-into-view";

export default function Experience() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView>
                <p className="text-xl pb-2">
                    Work
                </p>
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
                <p className="text-xl pb-2 pt-7">
                    Education
                </p>
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

