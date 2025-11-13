'use client';

import Image from "next/image";
import { AnimateUpIntoView } from "@/components/animations";

type WorkSlotData = {
    id: string;
    icon: string;
    company: string;
    position: string;
    description: string;
    timeframe: string;
};

type WorkSlotProps = {
    workSlotData: WorkSlotData;
};

function WorkSlot(props: WorkSlotProps) {
    const {
        workSlotData,
    } = props;

    return (
        <AnimateUpIntoView>
            <div className="flex flex-col gap-2 px-2.5 py-3">
                <div className="flex flex-row gap-2 justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            src={workSlotData.icon}
                            alt={workSlotData.company + " logo"}
                            width={60}
                            height={60}
                            className="aspect-square object-contain rounded text-xs"
                            draggable={false}
                            loading="eager"
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
                    <p className="flex justify-between items-end text-sm">
                        {workSlotData.timeframe}
                    </p>
                </div>
                <div>
                    <p className="text-muted-foreground text-sm mt-1">
                        {workSlotData.description}
                    </p>
                </div>
            </div>
        </AnimateUpIntoView>
    );
}

WorkSlot.displayName = "WorkSlot";

export { WorkSlot, type WorkSlotData };