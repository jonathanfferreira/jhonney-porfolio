import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Award, Sparkles, Star } from 'lucide-react'

const timeline = [
    { year: '2010', event: 'Primeiro contato com a dança - Projeto Dança na Escola (8 anos)' },
    { year: '2017', event: 'Início nas Danças Urbanas - Grupo Kulture Kaos' },
    { year: '2018', event: 'Bolsa de estudos APSD + Início como Professor + Curso Técnico AZ Arte' },
    { year: '2020', event: 'Seleção Brasileira HHI - Categoria Adult (APSD)' },
    { year: '2022', event: '3º Lugar FIH2 Júnior - "Desvendando Mistérios"' },
    { year: '2023', event: 'Co-coreógrafo Seleção Brasileira HHI (Júnior/Varsity) + Fundação do NDC + Ingresso na XPACE' },
    { year: '2024', event: 'Múltiplos ouros no HHU como coreógrafo XPACE' },
    { year: '2025', event: 'Vice-campeão nacional HHI + 2º FIH2 Avançado (feito histórico de Joinville)' },
]

export const About: React.FC = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background - Clean Dark */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-secondary/20 text-secondary rounded-full mb-4">
                        <Sparkles className="w-4 h-4" /> Sobre Mim
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        MINHA <span className="text-gradient">HISTÓRIA</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Photo Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img src="/images/about-1.jpg" alt="Jhonney" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img src="/images/about-2.jpg" alt="Jhonney Workshop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-6 rounded-2xl">
                                <Calendar className="w-6 h-6 text-primary mb-3" />
                                <p className="text-2xl font-bold">15/12/2001</p>
                                <p className="text-sm text-text-muted">Nascimento</p>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl">
                                <MapPin className="w-6 h-6 text-secondary mb-3" />
                                <p className="text-2xl font-bold">Joinville, SC</p>
                                <p className="text-sm text-text-muted">Capital da Dança</p>
                            </div>
                        </div>

                        {/* Bio Text */}
                        <div className="space-y-4 text-text-muted leading-relaxed">
                            <p>
                                Natural de <span className="text-white font-medium">São Paulo (Capital)</span>, iniciei minha jornada na dança aos 8 anos em Joinville, a <span className="text-primary font-medium">Capital da Dança</span>, no Projeto Dança na Escola.
                            </p>
                            <p>
                                Em 2017, integrei o grupo <span className="text-white font-medium">Kulture Kaos</span>, iniciando minha formação técnica intensa em Danças Urbanas. Em 2018, fui contemplado com bolsa de estudos no APSD e ingressei no <span className="text-white font-medium">Curso Técnico em Dança do AZ Arte</span>.
                            </p>
                            <p>
                                Em 2023, fundei o <span className="text-secondary font-medium">National Dance Capital (NDC)</span> para fomentar a cultura urbana em Joinville, e ingressei na <span className="text-accent font-medium">XPACE Dance Company</span> como sócio, co-diretor e coreógrafo.
                            </p>
                        </div>

                        {/* Highlight */}
                        <div className="glass-panel p-6 rounded-2xl border-l-4 border-accent">
                            <div className="flex items-center gap-3 mb-2">
                                <Star className="w-5 h-5 text-accent" />
                                <span className="font-bold text-white">Feito Histórico 2025</span>
                            </div>
                            <p className="text-sm text-text-muted">
                                Primeiro coreógrafo de Joinville a levar um grupo para a categoria <span className="text-white">Avançada do FIH2</span> e conquistar o 2º lugar.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Award className="w-6 h-6 text-accent" />
                            Trajetória
                        </h3>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                            {/* Timeline Items */}
                            <div className="space-y-6">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-12"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-background-dark border-2 border-primary" />

                                        {/* Content */}
                                        <div className="glass-panel p-4 rounded-xl hover:border-primary/30 transition-colors">
                                            <span className="text-sm font-bold text-primary">{item.year}</span>
                                            <p className="text-white font-medium text-sm">{item.event}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
