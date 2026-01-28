import React from 'react'
import { Instagram, Music2, MessageCircle, ArrowUp, Heart } from 'lucide-react'

const footerLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Especialidades', href: '#expertise' },
    { label: 'Premiações', href: '#awards' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
]

const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/jhonney.xp', label: 'Instagram' },
    { icon: Music2, href: 'https://tiktok.com/@jhonney.xp', label: 'TikTok' },
    { icon: MessageCircle, href: 'https://wa.me/5547984970324', label: 'WhatsApp' },
]

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo & Bio */}
                    <div className="md:col-span-2">
                        <a href="#" className="inline-block mb-6">
                            <span className="text-3xl font-black">
                                <span className="text-white">JHONNEY</span>
                                <span className="text-gradient">.</span>
                            </span>
                        </a>
                        <p className="text-text-muted max-w-md mb-6">
                            Dançarino, Professor e Coreógrafo de Danças Urbanas.
                            Sócio e Co-diretor da XPACE Dance Company.
                            Coreógrafo da Seleção Brasileira HHI e HHU.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-full transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Navegação</h4>
                        <ul className="space-y-3">
                            {footerLinks.slice(0, 4).map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-text-muted hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Mais</h4>
                        <ul className="space-y-3">
                            {footerLinks.slice(4).map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-text-muted hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-text-muted flex items-center gap-1">
                        © {new Date().getFullYear()} Jonathan Fagundes Ferreira. Feito com <Heart className="w-4 h-4 text-secondary inline" /> em Joinville, SC.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-text-muted hover:text-white transition-colors"
                    >
                        Voltar ao topo
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
