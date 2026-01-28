import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Film, ExternalLink } from 'lucide-react'

const videos = [
    {
        title: 'XPACEFLIX - O Espetáculo',
        description: 'A magia do cinema traduzida em dança. Espetáculo oficial de final de ano.',
        youtubeId: 'nscO5GYalsI',
        category: 'ESPETÁCULO',
        achievement: 'PRODUÇÃO ORIGINAL'
    },
    {
        title: 'Avançado - Festival de Julho (FIH2)',
        description: 'Apresentação da categoria Avançado no maior festival de Hip Hop da América Latina.',
        youtubeId: 'TipBGmO_PzY',
        category: 'COMPETIÇÃO',
        achievement: '2º LUGAR AVANÇADO'
    },
    {
        title: 'Junior Crew - HHI 2025',
        description: 'Coreografia para o Hip Hop International categoria Junior.',
        youtubeId: 'wGzmnBXzcUs',
        category: 'HHI',
        achievement: '2º LUGAR NACIONAL'
    },
    {
        title: 'Mini Crew - HHI 2025',
        description: 'Coreografia para o Hip Hop International categoria Mini.',
        youtubeId: 'cyFQmBLISr4',
        category: 'HHI',
        achievement: '2º LUGAR NACIONAL'
    }
]

export const Portfolio: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

    return (
        <section id="portfolio" className="section-padding bg-surface relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-secondary/20 text-secondary rounded-full mb-4">
                        <Film className="w-4 h-4" /> Portfólio
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        MEUS <span className="text-gradient">TRABALHOS</span>
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Coreografias que contam histórias e traduzem emoções através do movimento.
                    </p>
                </motion.div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                {/* Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-secondary/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-bold bg-primary/80 rounded-full">{video.category}</span>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <span className="text-xs font-bold text-accent">{video.achievement}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{video.title}</h3>
                                    <p className="text-sm text-text-muted mt-2 line-clamp-2">{video.description}</p>
                                </div>
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
                    <a
                        href="https://www.youtube.com/@xpacedancecompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 rounded-full transition-all duration-300"
                    >
                        <span className="font-medium">Ver mais no YouTube</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 p-2 text-white hover:text-secondary transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                                title={selectedVideo.title}
                                className="w-full h-full rounded-2xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
