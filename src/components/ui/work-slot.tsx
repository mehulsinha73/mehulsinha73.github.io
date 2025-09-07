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
        ...restProps
    } = props;

    return (
        <AnimateUpIntoView className="hover:bg-sidebar p-2.5 rounded-md" {...restProps}>
            <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                    <Image
                        src={workSlotData.icon}
                        alt={workSlotData.company + " logo"}
                        width={60}
                        height={60}
                        className="aspect-square object-contain transition-all duration-400 rounded text-xs"
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
                <p className="text-sm text-muted-foreground mt-2">
                    {workSlotData.description}
                </p>
            </div>
        </AnimateUpIntoView>
    );
}

WorkSlot.displayName = "WorkSlot";

export { WorkSlot, type WorkSlotData };