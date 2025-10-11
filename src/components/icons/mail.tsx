"use client";

import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface MailIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}

const MailIcon = forwardRef<HTMLDivElement, MailIconProps>(
    ({ className, size = 24, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(className)}
                {...props}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
            </div>
        );
    }
);

MailIcon.displayName = "MailIcon";

export { MailIcon };

