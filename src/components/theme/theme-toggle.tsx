"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, MonitorCheckIcon} from "@/components/icons";
import { AnimatedBackground } from "@/components/animations";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const themeOptions = [
        { value: "light", icon: <SunIcon /> },
        { value: "dark", icon: <MoonIcon /> },
        { value: "system", icon: <MonitorCheckIcon /> },
    ]

    return (
        <div className="flex gap-x-0.5 items-center">
            <AnimatedBackground
                defaultValue={theme}
                className='rounded-lg bg-muted'
                transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.3,
                }}
                onValueChange={(id) => {
                    setTheme(id as string)
                }}
            >
                {themeOptions.map((theme) => (
                    <Button
                        key={theme.value}
                        variant="ghost"
                        size="icon"
                        data-id={theme.value}
                        aria-label={`Switch to ${theme.value} theme`}
                    >
                        {theme.icon}
                    </Button>
                ))}
            </AnimatedBackground>
        </div>
    )
}
