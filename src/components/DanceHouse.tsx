import React from 'react'
import { motion } from 'framer-motion'
import { Home, Star, Users, Sparkles } from 'lucide-react'

export const DanceHouse: React.FC = () => {
    return (
        <section id="dancehouse" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-primary/20 text-primary rounded-full mb-4">
                        <Home className="w-4 h-4" /> Destaque Especial
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        DANCE <span className="text-gradient">HOUSE</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-3xl mx-auto">
                        Primeira casa de dançarinos influentes realizada pelo <span className="text-white font-medium">Festival de Dança de Joinville</span> em parceria com a <span className="text-primary font-medium">Millennium Cia de Dança</span>.
                    </p>
                </motion.div>

                {/* Highlight Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl border border-primary/30 mb-12"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <Star className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-black mb-2">Selecionado como Dançarino Influente</h3>
                            <p className="text-text-muted">
                                Participei da <span className="text-primary font-bold">1ª edição da Dance House</span>, um projeto pioneiro que reuniu dançarinos de destaque do cenário urbano brasileiro. Uma experiência única de imersão, trocas e conexões durante o maior festival de dança do país.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Photo Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                            src="/images/dancehouse-1.jpg"
                            alt="Dance House - Painel FDJ"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                            src="/images/dancehouse-2.jpg"
                            alt="Dance House - Equipe"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                            src="/images/dancehouse-3.jpg"
                            alt="Dance House - Grupo"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                            src="/images/dancehouse-4.jpg"
                            alt="Dance House - Noite"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                {/* Partners */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-8 text-text-muted"
                >
                    <span className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4" />
                        Festival de Dança de Joinville
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4" />
                        Millennium Cia de Dança (Thurbo Braga)
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
