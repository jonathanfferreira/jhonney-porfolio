import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#about' },
    { label: 'Premiações', href: '#awards' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
]

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2">
                            <span className="text-xl md:text-2xl font-black">
                                <span className="text-white">JHONNEY</span>
                                <span className="text-gradient">.</span>
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-5 py-2 bg-secondary/20 hover:bg-secondary/30 border border-secondary/50 hover:border-secondary rounded-full text-sm font-medium transition-all duration-300"
                        >
                            Contato
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-lg font-medium text-text-muted hover:text-white transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center px-5 py-3 bg-secondary/20 border border-secondary/50 rounded-full text-sm font-medium mt-4"
                            >
                                Entrar em Contato
                            </a>
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </>
    )
}
