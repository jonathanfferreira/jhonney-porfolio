import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Music2, MessageCircle, ArrowDown } from 'lucide-react'

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background - Clean Dark */}
            <div className="absolute inset-0 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase bg-primary/20 border border-primary/50 rounded-full text-primary"
                    >
                        Dançarino • Professor • Coreógrafo
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                        <span className="block text-white">JONATHAN</span>
                        <span className="block text-gradient">FAGUNDES</span>
                        <span className="block text-white">FERREIRA</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl font-light text-text-muted mb-4"
                    >
                        <span className="text-white font-bold italic">Jhonney</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-text-muted max-w-lg mb-8"
                    >
                        Especialista em Danças Urbanas com mais de 10 anos de experiência.
                        Seleção Brasileira HHI. Múltiplo campeão nacional.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="https://instagram.com/jhonney.xp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-full transition-all duration-300 group"
                        >
                            <Instagram className="w-5 h-5 group-hover:text-primary transition-colors" />
                            <span className="font-medium">Instagram</span>
                        </a>
                        <a
                            href="https://tiktok.com/@jhonney.xp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 rounded-full transition-all duration-300 group"
                        >
                            <Music2 className="w-5 h-5 group-hover:text-secondary transition-colors" />
                            <span className="font-medium">TikTok</span>
                        </a>
                        <a
                            href="https://wa.me/5547984970324"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-secondary/20 hover:bg-secondary/30 border border-secondary/50 rounded-full transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-medium">Contato</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden cyber-border">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10" />

                        {/* Photo */}
                        <img
                            src="/images/hero-main.jpg"
                            alt="Jhonney - Dançarino e Coreógrafo"
                            className="w-full h-full object-cover"
                        />

                        {/* Decorative border glow */}
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl" style={{ animation: 'glow 3s ease-in-out infinite alternate' }} />
                    </div>

                    {/* Floating Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute -right-4 top-1/4 glass-panel p-4 rounded-2xl hidden lg:block"
                    >
                        <p className="text-3xl font-black text-gradient">10+</p>
                        <p className="text-sm text-text-muted">Anos de Dança</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute -left-4 bottom-1/3 glass-panel p-4 rounded-2xl hidden lg:block"
                    >
                        <p className="text-3xl font-black text-primary">HHI</p>
                        <p className="text-sm text-text-muted">Seleção Brasileira</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                </a>
            </motion.div>
        </section>
    )
}
