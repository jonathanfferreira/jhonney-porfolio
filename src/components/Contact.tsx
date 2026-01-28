import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Music2, MessageCircle, Mail, MapPin, Send } from 'lucide-react'

const socialLinks = [
    {
        name: 'Instagram',
        icon: Instagram,
        url: 'https://instagram.com/jhonney.xp',
        handle: '@jhonney.xp',
        color: 'hover:text-pink-500 hover:border-pink-500/50'
    },
    {
        name: 'TikTok',
        icon: Music2,
        url: 'https://tiktok.com/@jhonney.xp',
        handle: '@jhonney.xp',
        color: 'hover:text-cyan-400 hover:border-cyan-400/50'
    },
    {
        name: 'WhatsApp',
        icon: MessageCircle,
        url: 'https://wa.me/5547984970324',
        handle: '+55 47 98497-0324',
        color: 'hover:text-green-500 hover:border-green-500/50'
    }
]

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/10 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-primary/20 text-primary rounded-full mb-4">
                        <Send className="w-4 h-4" /> Contato
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        VAMOS <span className="text-gradient">TRABALHAR JUNTOS</span>?
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Aulas, coreografias para eventos, competições ou projetos artísticos. Entre em contato!
                    </p>
                </motion.div>

                {/* Social Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-panel p-6 rounded-2xl text-center border border-white/10 transition-all duration-300 ${link.color} hover:-translate-y-2`}
                        >
                            <link.icon className="w-10 h-10 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-1">{link.name}</h3>
                            <p className="text-text-muted">{link.handle}</p>
                        </motion.a>
                    ))}
                </div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12 rounded-3xl text-center border border-secondary/30"
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-black mb-6">
                            Pronto para o próximo passo?
                        </h3>
                        <p className="text-text-muted mb-8">
                            Agende uma aula experimental, solicite um orçamento para coreografia,
                            ou tire suas dúvidas. Estou aqui para ajudar!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/5547984970324?text=Olá%20Jhonney!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20mais%20informações."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyber-button inline-flex items-center justify-center gap-3"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Fale comigo no WhatsApp</span>
                            </a>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center gap-2 mt-8 text-text-muted">
                            <MapPin className="w-4 h-4" />
                            <span>Joinville, Santa Catarina - Brasil</span>
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                    <p className="text-sm text-text-muted mb-4">
                        © {new Date().getFullYear()} Jonathan Fagundes Ferreira. Todos os direitos reservados.
                    </p>

                    <p className="text-xs text-text-muted/60">
                        Desenvolvido com 💜 por <a href="https://instagram.com/jhonney.xp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Jhonney</a>
                    </p>
                </motion.footer>
            </div>
        </section>
    )
}
