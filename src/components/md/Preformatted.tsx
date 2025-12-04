import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Preformatted(props: ComponentProps<"pre">) {
    return (
        <pre
            {...props}
            className={cn(
                "my-4 overflow-scroll py-4 font-mono border border-gray-300 bg-muted px-4 rounded-lg",
            )}
        />
    );
}