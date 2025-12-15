import type { ComponentProps } from "react";

export function Paragraph(props: ComponentProps<"p">) {
    return <p {...props} className="my-2 text-base leading-snug" />;
}