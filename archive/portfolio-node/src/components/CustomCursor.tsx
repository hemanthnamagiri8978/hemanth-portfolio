"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("interactive")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Solid glowing center block (Terminal cursor vibe) */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-5 bg-primary rounded-sm pointer-events-none z-[9999] mix-blend-screen terminal-glow"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 10,
                    scale: isHovering ? 0 : 1,
                    rotate: isHovering ? 90 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.2,
                }}
            />
            {/* Outer cyber crosshair ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-primary/40 pointer-events-none z-[9998] mix-blend-screen hidden md:flex items-center justify-center rounded-sm"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.2 : 1,
                    rotate: isHovering ? 45 : 0,
                    borderColor: isHovering ? "rgba(0, 255, 255, 0.8)" : "rgba(0, 255, 65, 0.4)"
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5,
                }}
            >
                {/* Crosshair marks inside the box */}
                <div className="absolute w-2 h-[1px] bg-primary/60 left-0"></div>
                <div className="absolute w-2 h-[1px] bg-primary/60 right-0"></div>
                <div className="absolute h-2 w-[1px] bg-primary/60 top-0"></div>
                <div className="absolute h-2 w-[1px] bg-primary/60 bottom-0"></div>
            </motion.div>
        </>
    );
}
