"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, Transition, motion } from "framer-motion";
import {
    Children,
    cloneElement,
    MouseEventHandler,
    ReactElement,
    useState,
    useId,
    ReactNode,
} from "react";

// Props read off / injected into each child by this component
type AnimatedChildProps = {
    "data-id": string;
    "data-checked"?: string;
    className?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
};

export type AnimatedBackgroundProps = {
    children:
    | ReactElement<{ "data-id": string }>[]
    | ReactElement<{ "data-id": string }>;
    defaultValue?: string;
    onValueChangeAction?: (newActiveId: string | null) => void;
    className?: string;
    transition?: Transition;
    enableHover?: boolean;
};

export function AnimatedBackground({
    children,
    defaultValue,
    onValueChangeAction: onValueChange,
    className,
    transition,
    enableHover = false,
}: AnimatedBackgroundProps) {
    // `undefined` means nothing has been selected yet, so `defaultValue` drives
    // the active item (it can arrive late, e.g. the resolved theme).
    const [selectedId, setSelectedId] = useState<string | null | undefined>(
        undefined
    );
    const activeId = selectedId === undefined ? defaultValue ?? null : selectedId;
    const uniqueId = useId();

    const handleSetActiveId = (id: string | null) => {
        setSelectedId(id);

        if (onValueChange) {
            onValueChange(id);
        }
    };

    return Children.map(children, (child, index) => {
        const element = child as ReactElement<AnimatedChildProps>;
        const id = element.props["data-id"];

        const interactionProps = enableHover
            ? {
                onMouseEnter: () => handleSetActiveId(id),
                onMouseLeave: () => handleSetActiveId(null),
            }
            : {
                onClick: () => { handleSetActiveId(id) },
            };

        return cloneElement(
            element,
            {
                key: index,
                className: cn("relative inline-flex", element.props.className),
                "data-checked": activeId === id ? "true" : "false",
                ...interactionProps,
            },
            <>
                <AnimatePresence initial={false}>
                    {activeId === id && (
                        <motion.div
                            layoutId={`background-${uniqueId}`}
                            className={cn("absolute inset-0 -z-10", className)}
                            transition={transition}
                            initial={{ opacity: defaultValue ? 1 : 0 }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        />
                    )}
                </AnimatePresence>
                <div>{element.props.children}</div>
            </>
        );
    });
}
