"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, BookOpen } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Technology - Computer Science and Engineering",
        institution: "Lovely Professional University",
        location: "Punjab, India",
        date: "Since August 2023",
        description: ""
    },
    {
        degree: "Intermediate",
        institution: "Sri Chaitanya Junior College",
        location: "Visakhapatnam, Andhra Pradesh",
        date: "Jun 2021 - Mar 2023",
        description: "Percentage: 80"
    },
    {
        degree: "Matriculation",
        institution: "Sri Chaitanya Techno School",
        location: "Visakhapatnam, Andhra Pradesh",
        date: "Jun 2020 - Apr 2021",
        description: "Percentage: 100"
    }
];

const achievements = [
    "Demonstrated strong problem-solving skills by achieving 5 stars in Java on HackerRank and completing 100+ LeetCode problems across difficulty levels (Nov 2025)",
    "Secured 4-Star Java Badge on HackerRank, demonstrating strong problem-solving and programming skills (Sep 2025)"
];

const certificates = [
    "Privacy and Security in Online social media - NPTEL (Nov 2025)",
    "Build Generative AI Apps and Solutions with No-Code Tools - Infosys (Aug 2025)",
    "Computational Theory : Language Principle & Finite Automata Theory - Infosys (Aug 2025)"
];

const trainings = [
    "Completed an intensive 35+ hour live online training program on C programming (Jul 2025)",
    "Gained hands-on experience through assignments, tasks, and a final assessment",
    "Completed 30+ hours of live industrial training in Ethical Hacking (Mar 2024)",
    "Gained hands-on exposure to cybersecurity fundamentals and vulnerability assessment"
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-24 relative bg-[#09090b] border-t border-border" ref={containerRef}>
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Education Timeline */}
                <div className="mb-24" id="academic-journey">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        viewport={{ once: true }}
                        className="mb-12 flex items-center gap-4 font-mono"
                    >
                        <div className="text-syntax-comment text-sm mb-0">// academic_records.db</div>
                        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-foreground">
                            <span className="text-syntax-keyword">type</span>
                            <span className="text-syntax-function">AcademicJourney</span> = [
                            <span className="animate-blink w-3 h-7 bg-primary inline-block translate-y-0.5"></span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8 relative">
                        {/* Scroll-Driven Timeline Line */}
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-border z-0 hidden md:block"
                        />
                        <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-zinc-800/50 z-0 block md:hidden" />
                        
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10 pl-10 md:pl-0`}
                            >
                                <div className="absolute left-1 md:left-auto md:relative flex items-center justify-center w-4 h-4 rounded-full border-2 border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">
                                </div>

                                <div className="w-full md:w-[calc(50%-2rem)] tech-panel p-6 hover:border-zinc-600 transition-colors">
                                    <div className="flex flex-col mb-2">
                                        <span className="text-syntax-string font-mono text-xs mb-1">&quot;{item.date}&quot;</span>
                                        <h3 className="text-lg font-bold text-foreground mt-1 font-mono">{item.degree}</h3>
                                    </div>
                                    <div className="text-zinc-300 font-mono font-medium mb-1 text-sm">{item.institution}</div>
                                    <div className="text-syntax-comment text-xs mb-3 font-mono">// {item.location}</div>
                                    {item.description && <p className="text-syntax-number text-xs font-mono bg-[#18181b] inline-block px-3 py-1 rounded-md border border-border">{item.description}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-8 font-mono text-2xl md:text-3xl font-bold flex text-foreground"
                    >
                        ];
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">

                    {/* Achievements & Certificates */}
                    <div id="achievements">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-4 font-mono"
                        >
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <span className="text-syntax-keyword">const</span>
                                <span className="text-syntax-variable">achievements</span> =
                            </h2>
                        </motion.div>

                        <div className="space-y-3">
                            {achievements.map((ach, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={`ach-${i}`}
                                    className="flex gap-4 tech-panel p-4 items-start border-l-2 border-l-syntax-function"
                                >
                                    <Award className="text-syntax-function shrink-0 mt-1" size={16} />
                                    <p className="text-zinc-400 text-sm leading-relaxed font-mono">{ach}</p>
                                </motion.div>
                            ))}
                            {certificates.map((cert, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (achievements.length + i) * 0.1 }}
                                    key={`cert-${i}`}
                                    className="flex gap-4 tech-panel p-4 items-start border-l-2 border-l-syntax-string"
                                >
                                    <CheckCircle2 className="text-syntax-string shrink-0 mt-1" size={16} />
                                    <p className="text-zinc-400 text-sm leading-relaxed font-mono">{cert}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Training */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-4 font-mono"
                        >
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <span className="text-syntax-keyword">const</span>
                                <span className="text-syntax-variable">trainingLog</span> =
                            </h2>
                        </motion.div>

                        <div className="space-y-3">
                            {trainings.map((train, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={i}
                                    className="flex gap-4 tech-panel p-4 items-start border-l-2 border-l-syntax-keyword"
                                >
                                    <div className="w-2 h-2 bg-syntax-keyword mt-1.5 shrink-0 rounded-full"></div>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-mono">{train}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
