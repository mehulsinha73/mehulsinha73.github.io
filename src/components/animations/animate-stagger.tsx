"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { VARIANTS_CONTAINER } from "@/components/animations/constants";

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

const AnimateStagger = React.forwardRef<HTMLDivElement, MotionDivProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <motion.section
                ref={ref}
                className={cn(className)}
                variants={VARIANTS_CONTAINER}
                initial="hidden"
                animate="visible"
                {...props}
            >
                {children}
            </motion.section>
        );
    }
);

AnimateStagger.displayName = "AnimateStagger";

export { AnimateStagger, type MotionDivProps };