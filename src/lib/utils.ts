import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getSiteUrl() {
    const url = process.env.SITE_URL;
    if (!url) {
        throw new Error("SITE_URL environment variable is not set.");
    }
    return url;
}