import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

export function Anchor(props: ComponentProps<"a">) {
    const className = 'text-blue-600 hover:text-orange-600  underline underline-offset-3';
    if (props.href?.startsWith('/')) {
        return (
            <Link href={props.href} className={className} {...props}>
                {props.children}
            </Link>
        );
    }
    if (props.href?.startsWith('#')) {
        const fragmentClass = cn('relative overflow-visible before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2', 
            'before:text-gray-500 before:content-["#"] before:opacity-0 hover:before:opacity-100 before:pointer-events-none');
        return (
            <a href={props.href} className={fragmentClass} {...props}>
                {props.children}
            </a>
        );
    }
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
        >
            {props.children}
        </a>
    );
}