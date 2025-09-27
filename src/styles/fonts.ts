import { Syncopate, Kode_Mono, Almendra, IBM_Plex_Mono } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const syncopate = Syncopate({
    variable: "--font-syncopate",
    subsets: ["latin"],
    weight: ["400"],
});

export const kodeMono = Kode_Mono({
    variable: "--font-kode-mono",
    subsets: ["latin"],
    weight: ["400"]
});

export const almendra = Almendra({
    variable: "--font-almendra",
    subsets: ["latin"],
    weight: ["400"]
});
