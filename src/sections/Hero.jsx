import { motion } from 'framer-motion';

export default function Hero() {
    const name = "Harshika".split('');

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-sage-light/20 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl text-center"
            >
                <span className="inline-block py-1.5 px-4 mb-8 text-[11px] uppercase tracking-[0.25em] font-bold text-sage-dark border border-sage/30 rounded-full bg-white/40 backdrop-blur-sm">
                    B.Tech Student • Product-Minded Frontend Builder
                </span>

                <h1 className="text-7xl md:text-[10rem] font-heading font-bold text-primary mb-10 leading-[0.8] tracking-tighter flex justify-center">
                    {name.map((char, index) => (
                        <motion.span 
                            key={index}
                            whileHover={{ y: -15, color: '#9FB7A8', rotate: index % 2 === 0 ? 5 : -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="inline-block cursor-default"
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed font-sans font-light">
                    I design and build <span className="inline-block hover:-translate-y-1 hover:scale-105 transition-transform duration-300 cursor-default text-primary italic font-medium mx-1">thoughtful web experiences</span> that connect clarity, interaction, and product thinking.
                </p>
            </motion.div>
        </section>
    );
}