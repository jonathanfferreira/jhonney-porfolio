import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Calendar, MessageCircle } from 'lucide-react'

const services = [
    {
        title: 'Debutantes',
        description: 'Coreografias personalizadas para tornar o baile dos 15 anos inesquecível. Preparação completa da debutante e valsa com o príncipe.',
        features: [
            'Valsa Clássica ou Moderna',
            'Coreografia com Chambelães',
            'Ensaios em Estúdio',
            'Acompanhamento no Evento'
        ],
        icon: Sparkles,
        color: 'secondary'
    },
    {
        title: 'Casamentos',
        description: 'A dança dos noivos é um momento mágico. Crio coreografias que contam a história do casal de forma especial e emocionante.',
        features: [
            'Dança dos Noivos',
            'Flash Mob com Padrinhos',
            'Entrada da Noiva',
            'Coreografias de Festa'
        ],
        icon: Heart,
        color: 'accent'
    }
]

export const Services: React.FC = () => {
    return (
        <section id="services" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-accent/20 text-accent rounded-full mb-4">
                        <Heart className="w-4 h-4" /> Serviços
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        EVENTOS <span className="text-gradient">ESPECIAIS</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Coreografias exclusivas para momentos únicos na sua vida.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Service Cards */}
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 md:p-10 rounded-3xl hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'}`}>
                                <service.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                            <p className="text-text-muted mb-8">{service.description}</p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className={`w-2 h-2 rounded-full ${service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`} />
                                        <span className="text-white/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/5547984970324?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20coreografia%20para%20evento."
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${service.color === 'secondary'
                                        ? 'bg-secondary/20 hover:bg-secondary/30 border border-secondary/50'
                                        : 'bg-accent/20 hover:bg-accent/30 border border-accent/50'
                                    }`}
                            >
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">Solicitar Orçamento</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 relative rounded-3xl overflow-hidden"
                >
                    <img
                        src="/images/debutante.jpg"
                        alt="Coreografia para Debutante"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                        <h3 className="text-3xl md:text-4xl font-black mb-4">
                            Transforme momentos em <span className="text-gradient">memórias eternas</span>
                        </h3>
                        <a
                            href="https://wa.me/5547984970324"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 rounded-full font-bold transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>Entre em contato</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
