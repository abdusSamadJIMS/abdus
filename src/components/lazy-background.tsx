"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

export default function LazyBackground({ children, url, className }: { children?: ReactNode, url: string, className?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById("lazy-bg");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="lazy-bg"
            className={cn(`h-full
                bg-blend-darken
                bg-no-repeat
                flex-1
                relative
                lg:bg-cover
                md:bg-cover
                sm:bg-contain
                bg-contain
                max-sm:bg-left
                max-md:bg-bottom`, className,
            )}
            style={{
                backgroundImage: isLoaded ? `url(${url})` : "none"
            }}
        >
            {children}
        </div>
    );
}
