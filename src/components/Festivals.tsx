import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const festivals = [
    {
        name: 'Hip Hop International',
        logo: '/images/logo-hhi.png',
        description: 'Seleção Brasileira - Categoria Adult'
    },
    {
        name: 'Hip Hop Unite',
        logo: '/images/logo-hhu.png',
        description: 'Campeão Nacional 2025'
    },
    {
        name: 'Festival de Dança de Joinville',
        logo: '/images/logo-fdj.png',
        description: 'Dance House 2024'
    },
    {
        name: 'FIH2',
        logo: '/images/logo-fih2.png',
        description: 'Workshops e Competições'
    }
]

export const Festivals: React.FC = () => {
    return (
        <section className="py-16 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-accent/20 text-accent rounded-full mb-4">
                        <Award className="w-4 h-4" /> Festivais
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black">
                        PARTICIPAÇÃO EM <span className="text-gradient">GRANDES EVENTOS</span>
                    </h2>
                </motion.div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {festivals.map((festival, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 group-hover:scale-105 group-hover:border-primary/50 transition-all">
                                <img
                                    src={festival.logo}
                                    alt={festival.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <p className="text-sm font-bold text-white">{festival.name}</p>
                            <p className="text-xs text-text-muted">{festival.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
