import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const headingClasses = "mt-8 mb-3 w-full font-bold";

export function H1(props: ComponentProps<"h1">) {
    return (
        <>
            <h1 {...props} className={cn(headingClasses, "text-2xl mb-1")} />
            <hr className="mb-3"/>
        </>
    );
}

export function H2(props: ComponentProps<"h2">) {
    return <h2 {...props} className={cn(headingClasses, "text-xl")} />;
}

export function H3(props: ComponentProps<"h3">) {
    return <h3 {...props} className={cn(headingClasses, "text-lg")} />;
}

export function H4(props: ComponentProps<"h4">) {
    return <h4 {...props} className={cn(headingClasses, "")} />;
}

export function H5(props: ComponentProps<"h5">) {
    return <h5 {...props} className={cn(headingClasses, "")} />;
}

export function H6(props: ComponentProps<"h6">) {
    return <h6 {...props} className={cn(headingClasses, "")} />;
}