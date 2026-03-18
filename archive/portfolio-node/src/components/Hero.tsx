"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden bg-background">
            {/* Subtle base grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(39,39,42,0.5)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* ===== LEFT COLUMN: Text Content ===== */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="font-mono text-muted text-xs mb-6 flex items-center gap-3"
                        >
                            <span className="text-primary">01</span>
                            <span className="w-8 h-[1px] bg-border inline-block"></span>
                            <span>init.sequence</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight mb-2">
                                NAMAGIRI
                            </h1>
                            <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight tracking-tight mb-6 flex items-center flex-wrap">
                                HEMANTH <span className="text-primary ml-3 lg:ml-4">KUMAR</span>
                                <span className="animate-blink inline-block w-3 lg:w-4 h-10 md:h-12 xl:h-16 bg-primary ml-3 translate-y-1"></span>
                            </h1>

                            <div className="font-mono text-sm md:text-lg border-l-2 border-border pl-4 py-2 mb-10 max-w-xl transition-colors hover:border-border/80">
                                <p className="text-syntax-comment mb-1">// Software Development Engineer</p>
                                <p className="text-muted"><span className="text-syntax-keyword">const</span> <span className="text-syntax-function">focus</span> = [<span className="text-syntax-string">&quot;Machine Learning&quot;</span>, <span className="text-syntax-string">&quot;Full Stack&quot;</span>];</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4 mb-10"
                        >
                            <Magnetic>
                                <a
                                    href="#projects"
                                    className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background transition-all duration-300 font-mono text-sm rounded-md ring-0 font-medium"
                                >
                                    view_projects()
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-transparent text-foreground border border-border hover:border-zinc-500 transition-all duration-300 font-mono text-sm rounded-md"
                                >
                                    contact.init
                                </a>
                            </Magnetic>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6 text-muted"
                        >
                            <a href="https://github.com/githubhemanthnamagiri8978" target="_blank" rel="noreferrer"
                                className="hover:text-foreground transition-colors flex items-center gap-2 font-mono text-xs group">
                                <Github size={18} />
                                <span>github</span>
                            </a>
                            <a href="https://linkedin.com/in/namagirihemanth51" target="_blank" rel="noreferrer"
                                className="hover:text-foreground transition-colors flex items-center gap-2 font-mono text-xs group">
                                <Linkedin size={18} />
                                <span>linkedin</span>
                            </a>
                            <a href="mailto:hemanthnamagiri@gmail.com"
                                className="hover:text-foreground transition-colors flex items-center gap-2 font-mono text-xs group">
                                <Mail size={18} />
                                <span>email</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* ===== RIGHT COLUMN: Profile Window ===== */}
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center lg:justify-end py-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <div className="relative w-full max-w-md">
                            {/* IDE-like window for the profile picture */}
                            <div className="bg-[#121214] border border-border rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                                {/* Window Header */}
                                <div className="bg-[#18181b] border-b border-border px-4 py-3 flex items-center gap-2">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-accent/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                                    </div>
                                    <div className="text-xs text-muted font-mono flex-1 text-center pr-8 opacity-70">profile.png &mdash; Preview</div>
                                </div>
                                {/* Image Container */}
                                <div className="relative aspect-square">
                                    <div className="absolute inset-0 bg-background mix-blend-overlay opacity-20 z-10"></div>
                                    <Image
                                        src="/profile.png"
                                        alt="Namagiri Hemanth Kumar"
                                        fill
                                        className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 z-0"
                                        priority
                                    />
                                    {/* Overlay Gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
                                </div>
                                {/* Footer Meta */}
                                <div className="bg-[#121214] px-4 py-3 border-t border-border flex justify-between items-center relative z-20">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="font-mono text-xs text-muted">status: online</span>
                                    </div>
                                    <span className="font-mono text-xs text-muted opacity-50">1024x1024 / RGB</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Minimalist Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-xs opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => {
                        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <ArrowDown size={14} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
