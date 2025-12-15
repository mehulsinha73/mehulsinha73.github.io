import type { ComponentProps } from "react";

export function BlockQuote(props: ComponentProps<"blockquote">) {
    return (
        <blockquote
            {...props}
            className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-400"
        />
    );
}