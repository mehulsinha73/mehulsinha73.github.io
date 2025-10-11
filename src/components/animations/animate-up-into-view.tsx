"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/components/animations/constants";

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

const AnimateUpIntoView = React.forwardRef<HTMLDivElement, MotionDivProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(className)}
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

AnimateUpIntoView.displayName = "AnimateUpIntoView";

export { AnimateUpIntoView };