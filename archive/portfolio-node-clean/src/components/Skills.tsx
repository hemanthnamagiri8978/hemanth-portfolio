"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Languages", items: ["Python", "C++", "Java", "C", "HTML", "CSS"] },
    { category: "Tools/Platforms", items: ["MySQL", "Pandas", "NumPy", "Scikit-[earn]", "Matplotlib"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Time Management", "Adaptability", "Leadership"] },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Technical <span className="text-primary">Arsenal</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <motion.span
                                        variants={itemVariants}
                                        key={i}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
