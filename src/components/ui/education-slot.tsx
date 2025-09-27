'use client';

import Image from "next/image";
import React from "react";
import { AnimateUpIntoView, MotionDivProps } from "@/components/animations/animate-up-into-view";

type EducationSlotData = {
    id: string;
    icon: string;
    college: string;
    degree: string;
    timeframe: string;
};

type EducationSlotProps = MotionDivProps & {
    educationSlotData: EducationSlotData;
};

function EducationSlot(props: EducationSlotProps) {
    const {
        educationSlotData,
    } = props;

    return (
        <AnimateUpIntoView>
            <div className="flex flex-row gap-2 justify-between items-center px-2.5 py-3">
                <div className="flex flex-row items-center gap-2">
                    <Image
                        src={educationSlotData.icon}
                        alt={educationSlotData.college + " logo"}
                        width={60}
                        height={60}
                        className="aspect-square object-contain rounded text-xs"
                        draggable={false}
                    />
                    <div className="flex flex-col justify-between items-start">
                        <p>
                            {educationSlotData.college}
                        </p>
                        <p className="text-muted-foreground text-sm">
                            {educationSlotData.degree}
                        </p>
                    </div>
                </div>
                <p className="flex justify-between items-end">
                    {educationSlotData.timeframe}
                </p>
            </div>
        </AnimateUpIntoView>
    );
}

EducationSlot.displayName = "EducationSlot";

export { EducationSlot, type EducationSlotData };