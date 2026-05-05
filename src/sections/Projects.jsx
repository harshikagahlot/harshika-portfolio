import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dashboardImg from '../assets/habitmetricdashboard.png';
import suswordImg from '../assets/susword.png';

const projects = [
    {
        id: 'habitmetric',
        title: 'HabitMetric',
        description: 'A habit and planning system built to turn rough intentions into structured daily execution. It focuses on the transition from high-level goals to concrete daily actions.',
        features: ["Planner → Execution Flow", "Unified Habits + Tasks", "Rule-Based Daily Structuring", "Local-First Persistent Tracking"],
        image: dashboardImg,
        github: 'https://github.com/harshikagahlot/HabitMetric',
        demo: 'https://harshikagahlot.github.io/HabitMetric/'
    },
    {
        id: 'susword',
        title: 'SusWord',
        description: 'A product-minded platform connecting linguistic growth with environmental impact. It gamifies the process of learning sustainability-focused vocabulary while tracking personal green milestones.',
        features: ["Eco-Vocabulary Engine", "Progress Visualization", "Impact Milestones", "Curated Learning Paths"],
        image: suswordImg,
        github: 'https://github.com/harshikagahlot/SusWord',
        demo: 'https://sus-word.vercel.app'
    }
];

export default function Projects() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-20 px-6 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto">

                {/* INTERACTIVE HEADING */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full text-left group flex items-center justify-between py-10"
                >
                    <h2 className="text-5xl md:text-8xl font-heading font-bold text-primary tracking-tighter group-hover:text-sage-dark transition-colors duration-500">
                        Featured Projects
                    </h2>
                    <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        className="text-4xl md:text-6xl text-sage"
                    >
                        +
                    </motion.span>
                </button>

                {/* EXPANDABLE SECTION */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1] // Custom quint ease for smooth expansion
                    }}
                    className="overflow-hidden"
                >
                    <div className="pt-20 space-y-32">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ y: 40, opacity: 0 }}
                                animate={isExpanded ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col lg:flex-row gap-16 items-center"
                            >
                                {/* LEFT: IMAGE */}
                                <div className="w-full lg:w-3/5 group rounded-[2.5rem] overflow-hidden border border-border bg-sage/5 p-4">
                                    <div className="rounded-[1.5rem] overflow-hidden shadow-xl border border-border/50">
                                        <img
                                            src={project.image}
                                            className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                            alt={`${project.title} Interface`}
                                        />
                                    </div>
                                </div>

                                {/* RIGHT: DESCRIPTION */}
                                <div className="w-full lg:w-2/5 space-y-8">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-secondary leading-relaxed font-light">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-sage-dark">Key Intelligence</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                            {project.features.map(f => (
                                                <div key={f} className="flex items-center gap-2 text-secondary/80">
                                                    <span className="text-sage text-xs">✦</span>
                                                    <span className="text-xs font-medium">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 flex gap-8 border-t border-border/50">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary font-bold hover:text-sage-dark transition-colors text-[10px] tracking-widest uppercase border-b border-primary/20 hover:border-sage pb-1"
                                        >
                                            Source Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary font-bold hover:text-sage-dark transition-colors text-[10px] tracking-widest uppercase border-b border-primary/20 hover:border-sage pb-1"
                                        >
                                            Live Demo ↗
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* BOTTOM PADDING */}
                    <div className="pb-32" />
                </motion.div>
            </div>
        </section>
    );
}