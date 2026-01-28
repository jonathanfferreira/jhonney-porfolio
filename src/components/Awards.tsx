import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, Star, Award, Zap } from 'lucide-react'

const personalAwards = [
    {
        year: '2020',
        event: 'Hip Hop International (HHI) Brasil',
        achievement: 'Seleção Brasileira - Categoria Adult',
        details: 'Representando o Brasil pelo APSD',
        type: 'gold'
    },
    {
        year: '2022',
        event: 'Festival Internacional de Hip Hop (FIH2)',
        achievement: '3º Lugar - Categoria Júnior',
        details: 'Tema: "Desvendando Mistérios" - APSD',
        type: 'bronze'
    },
    {
        year: '2023',
        event: 'Hip Hop International (HHI) Brasil',
        achievement: 'Co-coreógrafo da Seleção Brasileira',
        details: 'Categorias Júnior e Varsity (com Alisson Pereira)',
        type: 'gold'
    },
    {
        year: '2025',
        event: 'Festival de Dança de Joinville',
        achievement: '2º Lugar - Solo Masculino Sênior',
        details: 'Como coreógrafo do bailarino Marcelinho',
        type: 'silver'
    }
]

const hhuAwards = [
    { year: '2024', achievement: '🥇 Duo Júnior - XPACE' },
    { year: '2024', achievement: '🥇 Small Crew Cadet - XPACE' },
    { year: '2024', achievement: '🥈 Small Crew Júnior - XPACE' },
    { year: '2024', achievement: '🥇 Duo Júnior - APSD' },
    { year: '2025', achievement: '🥇 Duo Cadet - XPACE' },
    { year: '2025', achievement: '🥇 Duo Júnior - XPACE' },
    { year: '2025', achievement: '🥇 Small Crew Cadet - XPACE' },
]

const hhiAwards = [
    { event: 'HHI Santos 2025', achievement: '🥈 Mini Crew - Vice-campeão Nacional', highlight: true },
    { event: 'HHI Santos 2025', achievement: '🥈 Júnior - Vice-campeão Nacional', highlight: true },
    { event: 'HHI Santos 2025', achievement: '5º Lugar Adult' },
]

const fih2Awards = [
    { event: 'FIH2 2025 - Avançado', achievement: '🥈 Único grupo de Joinville na história nesta categoria', highlight: true },
    { event: 'FDJ 2025', achievement: '3 coreografias aprovadas (único grupo de Joinville)' },
]

export const Awards: React.FC = () => {
    const getMedalColor = (type: string) => {
        switch (type) {
            case 'gold': return 'text-yellow-500'
            case 'silver': return 'text-gray-400'
            case 'bronze': return 'text-orange-600'
            default: return 'text-primary'
        }
    }

    return (
        <section id="awards" className="section-padding relative overflow-hidden">
            {/* Background - Clean Dark */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-accent/20 text-accent rounded-full mb-4">
                        <Trophy className="w-4 h-4" /> Hall of Fame
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        PREMIAÇÕES & <span className="text-gradient">CONQUISTAS</span>
                    </h2>
                </motion.div>

                {/* Top Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-gradient">2x</p>
                        <p className="text-xs text-text-muted uppercase tracking-wide mt-1">Seleção Brasileira HHI</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-primary">7x</p>
                        <p className="text-xs text-text-muted uppercase tracking-wide mt-1">Ouro HHU</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-secondary">2x</p>
                        <p className="text-xs text-text-muted uppercase tracking-wide mt-1">Vice HHI Nacional</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-accent">1º</p>
                        <p className="text-xs text-text-muted uppercase tracking-wide mt-1">Joinville no FIH2 Avançado</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Personal Awards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Medal className="w-6 h-6 text-primary" />
                            Destaques da Carreira
                        </h3>

                        <div className="space-y-4">
                            {personalAwards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-panel p-5 rounded-2xl hover:border-primary/30 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-2 rounded-xl bg-white/5 ${getMedalColor(award.type)}`}>
                                            <Trophy className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-bold text-primary">{award.year}</span>
                                                <span className="text-xs text-text-muted">•</span>
                                                <span className="text-xs text-text-muted">{award.event}</span>
                                            </div>
                                            <h4 className="font-bold text-white">{award.achievement}</h4>
                                            <p className="text-xs text-text-muted mt-1">{award.details}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* HHU Section */}
                        <h3 className="text-xl font-bold mt-12 mb-6 flex items-center gap-3">
                            <Zap className="w-5 h-5 text-accent" />
                            Hip Hop Unite (HHU) - Como Coreógrafo
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                            {hhuAwards.map((award, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <span className="text-xs font-bold text-primary">{award.year}</span>
                                    <span className="text-sm text-white">{award.achievement}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* HHI & FIH2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Award className="w-6 h-6 text-secondary" />
                            HHI & FIH2 - 2025
                        </h3>

                        {/* HHI Highlight */}
                        <div className="glass-panel p-6 rounded-2xl border border-secondary/30 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-5 h-5 text-yellow-500" />
                                <span className="font-bold text-white">Hip Hop International - Santos 2025</span>
                            </div>
                            <div className="space-y-3">
                                {hhiAwards.map((award, index) => (
                                    <div key={index} className={`flex items-center gap-3 p-3 rounded-xl ${award.highlight ? 'bg-secondary/20 border border-secondary/30' : 'bg-white/5'}`}>
                                        <span className="text-sm">{award.achievement}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-text-muted mt-4 italic">
                                * O Mini Crew ficou atrás apenas do The Power Music Dance, que foi o primeiro grupo brasileiro a alcançar 2º lugar no HHI Mundial (Julho 2025).
                            </p>
                        </div>

                        {/* FIH2 */}
                        <div className="glass-panel p-6 rounded-2xl border border-accent/30">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-5 h-5 text-accent" />
                                <span className="font-bold text-white">FIH2 & Festival de Joinville</span>
                            </div>
                            <div className="space-y-3">
                                {fih2Awards.map((award, index) => (
                                    <div key={index} className={`p-3 rounded-xl ${award.highlight ? 'bg-accent/20 border border-accent/30' : 'bg-white/5'}`}>
                                        <p className="text-xs text-text-muted mb-1">{award.event}</p>
                                        <p className="text-sm text-white font-medium">{award.achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Primeira vez HHI */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10"
                        >
                            <p className="text-center text-sm text-text-muted">
                                <span className="text-white font-bold">Feito histórico:</span> Primeira vez como coreógrafo no HHI e já alcançou <span className="text-secondary font-bold">vice-campeão nacional</span> em duas categorias.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Photo Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/images/award-1.jpg" alt="Premiação" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/images/award-2.jpg" alt="Troféu FIH2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/images/award-3.jpg" alt="HHU Team" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/images/award-4.jpg" alt="Joinfestival" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
