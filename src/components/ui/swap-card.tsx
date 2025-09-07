"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimateUpIntoView, MotionDivProps } from "@/components/animations/animate-up-into-view";

export type SwapCardData = {
    id: string;
    title: string;
    excerpt: string;
    createdAt: string;
    domain: string;
    slug: string;
    alt: string[];
    techStack: string[];
    thumbnail: string[];
    actionLabel?: string;
};

type SwapCardProps = MotionDivProps & {
    swapCardData: SwapCardData;
};

function SwapCard(props: SwapCardProps) {
    const {
        swapCardData,
        ...restProps
    } = props;

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const thumbnails = swapCardData.thumbnail;

    const handleSwap = (direction: "forward" | "backward") => {
        if (isTransitioning)
            return;

        setIsTransitioning(true);
        const directionValue = direction === "forward" ? 1 : -1;
        const nextIndex = (activeIndex + directionValue + thumbnails.length) % thumbnails.length;
        setActiveIndex(nextIndex);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 250);
    };

    return (
        <AnimateUpIntoView className="w-full space-y-4 rounded-lg bg-sidebar p-4 border max-w-96 overflow-hidden" {...restProps}>
            <div className="flex items-center justify-center gap-4 relative aspect-video w-full overflow-hidden rounded-xl">
                <AnimatePresence initial={false}>
                    {thumbnails.map((src, index) => (
                        <motion.div
                            key={src}
                            className={cn(
                                "absolute inset-0 h-full w-full",
                                activeIndex === index ? "z-10" : "z-0"
                            )}
                            initial={false}
                            animate={{
                                opacity: activeIndex === index ? 1 : 0,
                                scale: activeIndex === index ? 1 : 0.92,
                                x:
                                    activeIndex === index
                                        ? 0
                                        : index < activeIndex
                                            ? "-100%"
                                            : "100%",
                            }}
                            transition={{
                                opacity: { duration: 0.5, ease: "easeInOut" },
                                scale: { duration: 0.5, ease: "easeOut" },
                                x: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
                            }}
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-xl border">
                                <Image
                                    src={src}
                                    alt={swapCardData.alt[index]}
                                    fill
                                    className="object-cover transition-all duration-400 border rounded-xl"
                                    style={{
                                        objectPosition: index === 0 ? "top" : "center",
                                    }}
                                    draggable={false}
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                <Button
                    onClick={() => handleSwap("forward")}
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full",
                        "bg-primary/30 text-primary-foreground hover:text-primary-foreground dark:hover:bg-primary/50",
                        isTransitioning && "pointer-events-none opacity-70"
                    )}
                    aria-label={`Show next image`}
                    disabled={isTransitioning}
                >
                    <ChevronRight size={16} strokeWidth={1.5} />
                </Button>
                <Button
                    onClick={() => handleSwap("backward")}
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full",
                        "bg-primary/30 text-primary-foreground hover:text-primary-foreground dark:hover:bg-primary/50",
                        isTransitioning && "pointer-events-none opacity-70"
                    )}
                    aria-label={`Show previous image`}
                    disabled={isTransitioning}
                >
                    <ChevronLeft size={16} strokeWidth={1.5} />
                </Button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 rounded-full bg-primary/30 backdrop-blur-sm px-2 py-1 shadow-sm border border-white/20">
                    {thumbnails.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => !isTransitioning && setActiveIndex(index)}
                            className={cn(
                                "size-2 rounded-full transition-all duration-300 cursor-pointer",
                                activeIndex === index
                                    ? "bg-white scale-110 ring-1 ring-white/50 ring-offset-1 ring-offset-black/30"
                                    : "bg-white/60 hover:bg-white/80"
                            )}
                            aria-label={`View image ${index + 1}`}
                            disabled={isTransitioning}
                        />
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="space-y-2">
                    <h2 className="line-clamp-1 font-medium">{swapCardData.title}</h2>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                        {swapCardData.excerpt}
                    </p>
                    <Link
                        href={`/swapCardData/${swapCardData.slug}`}
                        className="text-sm inline-block font-medium text-primary transition-colors duration-300 after:content-['_↗'] hover:text-primary/80"
                    >
                        {swapCardData.actionLabel || "Product details"}
                    </Link>
                </div>

                <ScrollArea className="w-full">
                    <div className="flex gap-2 pb-1">
                        {swapCardData.techStack.map((tag, index) => (
                            <Badge
                                key={index}
                                className="shrink-0 bg-muted-foreground hover:bg-muted-background"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="h-1.5" />
                </ScrollArea>

                <div className="flex items-center justify-between gap-4 text-xs">
                    <time className="text-muted-foreground">{swapCardData.createdAt}</time>
                    <Link
                        className="text-muted-foreground transition-colors duration-300 hover:text-muted-foreground/80"
                        href={swapCardData.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {swapCardData.domain}
                    </Link>
                </div>
            </div>
        </AnimateUpIntoView>
    );
}

SwapCard.displayName = "SwapCard";

export { SwapCard };
