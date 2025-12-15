import type { ComponentProps } from "react";

export function OrderedList(props: ComponentProps<"ol">) {
    return (
        <ol {...props} className="my-3 ml-10 list-decimal space-y-1" />
    );
}

export function UnorderedList(props: ComponentProps<"ul">) {
    return (
        <ul {...props} className="list-disc my-3 ml-5 space-y-1" />
    );
}

export function ListItem(props: ComponentProps<"li">) {
    return <li {...props} className="pl-1" />;
}