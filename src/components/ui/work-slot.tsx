'use client';

import Image from "next/image";
import React from "react";
import { AnimateUpIntoView, MotionDivProps } from "@/components/animations/animate-up-into-view";

type WorkSlotData = {
    id: string;
    icon: string;
    company: string;
    position: string;
    description: string;
    timeframe: string;
};

type WorkSlotProps = MotionDivProps & {
    workSlotData: WorkSlotData;
};

function WorkSlot(props: WorkSlotProps) {
    const {
        workSlotData,
    } = props;

    return (
        <AnimateUpIntoView>
            <div className="flex flex-col gap-2 p-2.5">
                <div className="flex flex-row gap-2 justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            src={workSlotData.icon}
                            alt={workSlotData.company + " logo"}
                            width={60}
                            height={60}
                            className="aspect-square object-contain rounded text-xs"
                            draggable={false}
                        />
                        <div className="flex flex-col justify-between items-start">
                            <p>
                                {workSlotData.company}
                            </p>
                            <p className="text-muted-foreground text-sm">
                                {workSlotData.position}
                            </p>
                        </div>
                    </div>
                    <p className="flex justify-between items-end">
                        {workSlotData.timeframe}
                    </p>
                </div>
                <div>
                    <p className="text-muted-foreground text-sm mt-3">
                        {workSlotData.description}
                    </p>
                </div>
            </div>
        </AnimateUpIntoView>
    );
}

WorkSlot.displayName = "WorkSlot";

export { WorkSlot, type WorkSlotData };