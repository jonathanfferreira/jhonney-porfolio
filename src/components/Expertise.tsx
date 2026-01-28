import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Palette, User, Star, Building, Music, Rocket } from 'lucide-react'

const expertiseData = [
    {
        title: 'PROFESSOR',
        icon: GraduationCap,
        color: 'primary',
        since: 'Desde 2018',
        description: 'Formando novos talentos e transmitindo a paixão pela dança.',
        places: [
            'XPACE Dance Company (atual)',
            'Alisson Pereira Studio de Dança (Coordenador)',
            'Bianca Ballet Studio de Dança',
            'Unity Force Company',
            'SPARK BRAZIL'
        ]
    },
    {
        title: 'COREÓGRAFO',
        icon: Palette,
        color: 'secondary',
        since: 'Múltiplos Prêmios',
        description: 'Criando trabalhos para competições, espetáculos e artistas.',
        places: [
            'Seleção Brasileira HHI (2023 - com Alisson Pereira)',
            'Seleção Brasileira HHU (2024/2025)',
            'XPACE, APSD, ATHOS',
            'Artistas: DJ Davi Kneip, DJ THG',
            'XPACEFLIX - Diretor Artístico e Roteirista'
        ]
    },
    {
        title: 'DANÇARINO',
        icon: User,
        color: 'accent',
        since: 'Seleção Brasileira HHI 2020',
        description: 'Competidor de alto nível e eterno estudante da dança.',
        places: [
            'Seleção Brasileira HHI (Categoria Adult - 2020)',
            'Grupo Kulture Kaos (2017 - formação)',
            'Workshops: RioH2K, FIH2 (3x), Casa da Dança (3x), StreetCamp, Colônia de Férias (Verão 2025)',
            'Workshop Showcase: Tatiana Souza, Gladstone Navarro'
        ]
    }
]

const currentRoles = [
    { title: 'Sócio e Co-diretor', place: 'XPACE Escola de Dança' },
    { title: 'Coreógrafo', place: 'Seleção Brasileira HHI/HHU' },
    { title: 'Idealizador', place: 'National Dance Capital (NDC)' },
]

export const Expertise: React.FC = () => {
    const getColorClass = (color: string) => {
        switch (color) {
            case 'primary': return 'text-primary bg-primary/20 border-primary/50'
            case 'secondary': return 'text-secondary bg-secondary/20 border-secondary/50'
            case 'accent': return 'text-accent bg-accent/20 border-accent/50'
            default: return 'text-primary bg-primary/20 border-primary/50'
        }
    }

    return (
        <section id="expertise" className="section-padding bg-surface relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-primary/20 text-primary rounded-full mb-4">
                        <Star className="w-4 h-4" /> Especialidades
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        MINHAS <span className="text-gradient-primary">ESPECIALIDADES</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Com mais de 15 anos de experiência desde meu primeiro contato com a dança, atuo em três frentes que se complementam.
                    </p>
                </motion.div>

                {/* Current Roles Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 glass-panel p-6 rounded-2xl border border-accent/30"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket className="w-5 h-5 text-accent" />
                        <span className="font-bold text-white">Atuação Atual</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentRoles.map((role, index) => (
                            <div key={index} className="flex flex-col">
                                <span className="text-accent font-bold">{role.title}</span>
                                <span className="text-sm text-text-muted">{role.place}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="h-full glass-panel p-8 rounded-3xl hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-2xl mb-6 ${getColorClass(item.color)}`}>
                                    <item.icon className="w-8 h-8" />
                                </div>

                                {/* Title & Since */}
                                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                                <p className={`text-sm font-bold mb-4 ${item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                                    {item.since}
                                </p>

                                {/* Description */}
                                <p className="text-text-muted mb-6">{item.description}</p>

                                {/* Places */}
                                <ul className="space-y-3">
                                    {item.places.map((place, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm">
                                            <Building className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                                            <span className="text-white/80">{place}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Extra Highlight - XPACEFLIX + NDC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl border-secondary/30"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Music className="w-10 h-10 text-secondary" />
                            <div>
                                <h3 className="text-2xl font-black">
                                    <span className="text-gradient">XPACEFLIX</span>
                                </h3>
                                <p className="text-sm text-text-muted">O Espetáculo</p>
                            </div>
                        </div>
                        <p className="text-text-muted">
                            Diretor artístico, roteirista e coreógrafo do espetáculo XPACEFLIX, traduzindo a magia do cinema em dança com todas as turmas da XPACE.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl border-accent/30"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Rocket className="w-10 h-10 text-accent" />
                            <div>
                                <h3 className="text-2xl font-black">
                                    <span className="text-gradient">NDC</span>
                                </h3>
                                <p className="text-sm text-text-muted">National Dance Capital</p>
                            </div>
                        </div>
                        <p className="text-text-muted">
                            Projeto autoral fundado em 2023 com o objetivo de fomentar e valorizar a cultura das danças urbanas em Joinville, a Capital da Dança.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
