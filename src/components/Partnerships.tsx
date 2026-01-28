import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, ExternalLink } from 'lucide-react'

const partnerships = [
    {
        name: 'ANJUSS',
        type: 'Campanha de Moda',
        description: 'Modelo para campanha de coleção streetwear.',
        image: '/images/anjuss-1.jpg',
        year: '2024'
    },
    {
        name: 'Dance House',
        type: 'Festival de Dança de Joinville',
        description: 'Selecionado como dançarino influente para a 1ª edição da casa de dançarinos.',
        image: '/images/dancehouse-1.jpg',
        year: '2024'
    },
    {
        name: 'Millennium Cia de Dança',
        type: 'Parceria Artística',
        description: 'Participação em projetos e eventos em parceria com Thurbo Braga.',
        image: '/images/dancehouse-2.jpg',
        year: '2024'
    }
]

export const Partnerships: React.FC = () => {
    return (
        <section id="partnerships" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-primary/20 text-primary rounded-full mb-4">
                        <Briefcase className="w-4 h-4" /> Parcerias
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        PARCERIAS & <span className="text-gradient">CAMPANHAS</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Trabalhos realizados com marcas e parceiros do cenário da dança e moda.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {partnerships.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden"
                        >
                            {/* Image */}
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="inline-block px-3 py-1 text-xs font-bold bg-primary/80 rounded-full mb-3">
                                    {partner.year}
                                </span>
                                <h3 className="text-2xl font-black text-white mb-1">{partner.name}</h3>
                                <p className="text-sm text-secondary font-medium mb-2">{partner.type}</p>
                                <p className="text-sm text-text-muted">{partner.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-text-muted mb-4">Interessado em uma parceria?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 hover:bg-secondary/30 border border-secondary/50 hover:border-secondary rounded-full font-medium transition-all"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Entre em contato
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
