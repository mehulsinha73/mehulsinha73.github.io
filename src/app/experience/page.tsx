import { EducationSlot } from "@/components/ui/education-slot";
import { educationSlotData } from "./data";

export default function Experience() {
    return (
        <div className="space-y-7">
            <div>
                <p className="text-xl">
                    Work
                </p>
                <div className="pt-3 gap-2 flex flex-col justify-between">

                </div>
            </div>
            <div>
                <p className="text-xl">
                    Education
                </p>
                <div className="pt-3 gap-2 flex flex-col justify-between">
                    {educationSlotData.map((data) =>
                        <EducationSlot key={data.id} educationSlotData={data} />
                    )}
                </div>
            </div>
        </div>
    );
}

