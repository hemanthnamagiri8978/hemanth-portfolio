"use client";

import { motion } from "framer-motion";

const allSkills = [
    "Python", "C++", "Java", "C", "HTML", "CSS",
    "MySQL", "Pandas", "NumPy", "Scikit-[earn]", "Matplotlib",
    "Problem-Solving", "Time Management", "Adaptability", "Leadership",
    "Machine Learning", "Data Analysis", "React", "Next.js", "TailwindCSS"
];

// Double the array for seamless infinite scrolling
const marqueeSkills = [...allSkills, ...allSkills];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-[#09090b] border-t border-border">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 font-mono"
                >
                    <div className="text-syntax-comment text-sm mb-2">// architecture_dependencies.json</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                        <span className="text-syntax-keyword">const</span>
                        <span className="text-syntax-variable">techStack</span> =
                        <span className="animate-blink w-4 h-8 bg-primary inline-block translate-y-1"></span>
                    </h2>
                </motion.div>

                <div className="relative overflow-hidden py-8 flex flex-col gap-6 -mx-6 md:mx-0">
                    {/* Edge Fade Masks */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none"></div>

                    {/* First Matrix Row - Scrolls Left */}
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {marqueeSkills.map((skill, idx) => (
                            <div key={idx} className="tech-panel px-5 py-3 flex items-center gap-4 min-w-[180px] group cursor-default">
                                <span className="text-xs font-mono text-muted/50 transition-colors">[{idx.toString().padStart(2, '0')}]</span>
                                <span className="text-sm font-mono text-zinc-300 group-hover:text-primary transition-colors">"{skill}"</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Second Matrix Row - Scrolls Right */}
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                    >
                        {marqueeSkills.slice().reverse().map((skill, idx) => (
                            <div key={idx} className="tech-panel px-5 py-3 flex items-center gap-4 min-w-[180px] group cursor-default">
                                <span className="text-sm font-mono text-zinc-300 group-hover:text-primary transition-colors">"{skill}"</span>
                                <span className="text-xs font-mono text-muted/50 transition-colors ml-auto">[{idx.toString().padStart(2, '0')}]</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
