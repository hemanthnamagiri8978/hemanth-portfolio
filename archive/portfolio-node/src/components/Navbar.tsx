"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Academic Journey", href: "#academic-journey" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.1 }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-border rounded-b-xl mx-auto max-w-7xl mt-4 px-6 py-4 transition-all duration-300 shadow-xl"
        >
            {/* Scroll Progress Bar globally tracked in Top Nav */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-b-xl"
                style={{ scaleX, transformOrigin: "0%" }}
            />
            <div className="flex items-center justify-between">
                <a href="#" className="text-xl font-bold font-mono text-foreground flex items-center gap-2">
                    <span className="text-primary">import</span> NHK <span className="text-muted">from</span> &quot;./me&quot;
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-mono text-muted hover:text-foreground transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden mt-4 pt-4 border-t border-border flex flex-col gap-4 font-mono"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-muted hover:text-foreground hover:bg-zinc-900/50 px-3 py-2 rounded-md transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
