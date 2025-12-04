import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function FigureCaption(props: ComponentProps<"figcaption">) {

    return (
        <figcaption
            {...props}
            className={cn(
                "flex font-mono justify-center items-center text-center my-1 text-sm",
            )}
        >
            {props.children}
        </figcaption>
    );
}