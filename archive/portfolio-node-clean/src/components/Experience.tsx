"use client";

import { motion } from "framer-motion";
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
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6">

                {/* Education Timeline */}
                <div className="mb-24" id="academic-journey">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 flex items-center gap-4"
                    >
                        <div className="p-3 bg-primary/20 rounded-lg text-primary"><GraduationCap size={28} /></div>
                        <h2 className="text-3xl font-bold font-space">Academic <span className="text-primary">Journey</span></h2>
                    </motion.div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-slate-800 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>

                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl hover:border-primary/50 transition-colors">
                                    <div className="flex flex-col mb-2">
                                        <span className="text-primary font-mono text-sm">{item.date}</span>
                                        <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
                                    </div>
                                    <div className="text-slate-300 font-medium mb-1">{item.institution}</div>
                                    <div className="text-muted text-sm mb-3">{item.location}</div>
                                    {item.description && <p className="text-slate-400 text-sm bg-white/5 inline-block px-3 py-1 rounded-md">{item.description}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Achievements & Certificates */}
                    <div id="achievements">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-4"
                        >
                            <div className="p-3 bg-secondary/20 rounded-lg text-secondary"><Award size={28} /></div>
                            <h2 className="text-2xl font-bold font-space text-white">Achievements & <span className="text-secondary">Certificates</span></h2>
                        </motion.div>

                        <div className="space-y-4">
                            {achievements.map((ach, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={`ach-${i}`}
                                    className="flex gap-4 glass p-4 rounded-xl items-start"
                                >
                                    <Award className="text-yellow-500 shrink-0 mt-1" size={20} />
                                    <p className="text-slate-300 text-sm leading-relaxed">{ach}</p>
                                </motion.div>
                            ))}
                            {certificates.map((cert, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (achievements.length + i) * 0.1 }}
                                    key={`cert-${i}`}
                                    className="flex gap-4 glass p-4 rounded-xl items-start"
                                >
                                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                                    <p className="text-slate-300 text-sm leading-relaxed">{cert}</p>
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
                            className="mb-8 flex items-center gap-4"
                        >
                            <div className="p-3 bg-accent/20 rounded-lg text-accent"><BookOpen size={28} /></div>
                            <h2 className="text-2xl font-bold font-space text-white">Professional <span className="text-accent">Training</span></h2>
                        </motion.div>

                        <div className="space-y-4">
                            {trainings.map((train, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={i}
                                    className="flex gap-4 glass p-4 rounded-xl items-start border-l-4 border-l-accent border-y-border border-r-border"
                                >
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{train}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
