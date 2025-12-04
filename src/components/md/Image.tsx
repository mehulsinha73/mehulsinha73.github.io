import { ComponentProps } from "react";

export function Image(props: ComponentProps<"img">) {
    return <img alt={props.alt} {...props} className="m-auto my-8 max-w-[50%] border rounded-md" />;
}