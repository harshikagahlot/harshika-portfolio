import { motion } from 'framer-motion';

const identityCards = [
    {
        id: "featured-project",
        title: "Build",
        desc: "Turning ideas into real, usable web products.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    },
    {
        id: "project-visual",
        title: "Design",
        desc: "Creating interfaces that feel intentional, clean, and memorable.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.6 1.5-1.5 0-.4-.1-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-4.9-4.5-9-10-9z"></path></svg>
    },
    {
        id: "how-i-think",
        title: "Think",
        desc: "Using product and UX reasoning to reduce friction and improve flow.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
        id: "growing",
        title: "Grow",
        desc: "Exploring frontend, product thinking, and AI-assisted workflows every day.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
    }
];

export default function WhatIDo() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-24 px-6 bg-[#F1F0EA] border-y border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {identityCards.map((item, index) => (
                    <motion.div
                        key={index}
                        onClick={() => scrollTo(item.id)}
                        whileHover={{ y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-10 rounded-[2.5rem] border border-sage/40 bg-white hover:bg-sage active:bg-sage hover:border-sage-dark transition-all duration-500 group cursor-pointer"
                    >
                        <div className="text-sage-dark group-hover:text-white mb-6 transition-colors duration-500">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-heading font-semibold mb-4 text-primary group-hover:text-white transition-colors duration-500">
                            {item.title}
                        </h3>
                        <p className="text-secondary/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}