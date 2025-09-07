"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

const AnimateUpIntoView = React.forwardRef<HTMLDivElement, MotionDivProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(className)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

AnimateUpIntoView.displayName = "AnimateUpIntoView";

export { AnimateUpIntoView, type MotionDivProps };