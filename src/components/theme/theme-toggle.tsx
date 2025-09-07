"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SunIcon } from "@/components/icons/sun";
import { MoonIcon } from "@/components/icons/moon";
import { MonitorCheckIcon } from "@/components/icons/monitor-check";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="flex gap-x-0.5 items-center">
            <MountedButton
                themeValue="light"
                mounted={mounted}
                icon={<SunIcon />}
            />
            <MountedButton
                themeValue="dark"
                mounted={mounted}
                icon={<MoonIcon />}
            />
            <MountedButton
                themeValue="system"
                mounted={mounted}
                icon={<MonitorCheckIcon />}
            />
        </div>
    )
}

function MountedButton({ themeValue, mounted, icon }: {
    themeValue: "light" | "dark" | "system";
    mounted: boolean;
    icon: React.ReactNode;
}) {
    const { theme, setTheme } = useTheme();

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                asChild
                onClick={() => setTheme(themeValue)}
            >
                {icon}
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            asChild
            onClick={() => setTheme(themeValue)}
            className={theme === themeValue ? "bg-muted" : ""}
        >
            {icon}
        </Button>
    );
}
