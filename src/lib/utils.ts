import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getSiteUrl(path = ""): string {
    const baseUrl = process.env.SITE_URL;
    if (!baseUrl) {
        throw new Error("SITE_URL environment variable is not set.");
    }
    return `${baseUrl.replace(/\/$/, "")}${path}`;
}