import { motion } from 'framer-motion';

export default function Footer() {
    const titleWords = "Let’s build something thoughtful.".split(' ');

    return (
        <footer className="pt-32 pb-12 px-6 bg-primary text-background rounded-t-[4rem] mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="max-w-xl">
                        <h2 className="text-5xl md:text-[5.5rem] font-heading font-bold leading-[1.1] tracking-tighter mb-8 text-white flex flex-wrap gap-x-4">
                            {titleWords.map((word, wIdx) => (
                                <span key={wIdx} className="inline-flex">
                                    {word.split('').map((char, cIdx) => (
                                        <motion.span
                                            key={cIdx}
                                            whileHover={{ y: -10, color: '#BFD8CC', rotate: cIdx % 2 === 0 ? 5 : -5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="inline-block cursor-default"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h2>
                        <p className="text-[#BFD8CC] text-lg md:text-xl font-light leading-relaxed">
                            Open to <span className="inline-block hover:-translate-y-1 hover:scale-105 transition-transform duration-300 font-medium text-white cursor-default mx-1 -mt-1">frontend</span>, <span className="inline-block hover:-translate-y-1 hover:scale-105 transition-transform duration-300 font-medium text-white cursor-default mx-1 -mt-1">UI/UX</span>, and <span className="inline-block hover:-translate-y-1 hover:scale-105 transition-transform duration-300 font-medium text-white cursor-default mx-1 -mt-1">product-thinking opportunities</span>.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end justify-center gap-8">
                        <a
                            href="mailto:harshikagahlot01@gmail.com"
                            className="text-2xl md:text-4xl font-heading font-medium hover:text-[#BFD8CC] transition-colors border-b-2 border-white/20 hover:border-[#BFD8CC] pb-2 text-left"
                        >
                            harshikagahlot01@gmail.com
                        </a>
                        <div className="flex gap-8 md:gap-10 text-[11px] font-bold tracking-[0.3em] uppercase text-white/60">
                            <a href="#" className="hover:text-white transition-colors">Resume</a>
                            <a href="https://github.com/harshikagahlot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://productandperspective.blogspot.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/40 tracking-[0.4em] uppercase font-bold text-center md:text-left">
                    <p>
                        © {new Date().getFullYear()} Harshika • Product-Minded Builder
                    </p>
                    <p className="md:text-right">
                        Built with React, motion, and product-minded iteration.
                    </p>
                </div>
            </div>
        </footer>
    );
}