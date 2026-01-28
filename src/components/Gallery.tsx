import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
    // Profissionais
    { src: '/images/hero-main.jpg', category: 'Profissional', title: 'Retrato Noturno' },
    { src: '/images/anjuss-1.jpg', category: 'Jobs', title: 'Campanha ANJUSS' },
    { src: '/images/anjuss-2.jpg', category: 'Jobs', title: 'Campanha ANJUSS' },

    // Dance House
    { src: '/images/dancehouse-1.jpg', category: 'Dance House', title: 'FDJ Dance House' },
    { src: '/images/dancehouse-2.jpg', category: 'Dance House', title: 'Equipe Dance House' },
    { src: '/images/dancehouse-3.jpg', category: 'Dance House', title: 'Dance House Crew' },
    { src: '/images/dancehouse-4.jpg', category: 'Dance House', title: 'Dance House Night' },

    // Premiações
    { src: '/images/award-1.jpg', category: 'Premiações', title: 'HHU 2025' },
    { src: '/images/award-2.jpg', category: 'Premiações', title: 'Troféu FIH2' },
    { src: '/images/award-3.jpg', category: 'Premiações', title: 'Equipe HHU' },
    { src: '/images/award-4.jpg', category: 'Premiações', title: 'Joinfestival' },

    // Infância
    { src: '/images/infancia-1.jpg', category: 'Infância', title: 'Projeto Dança na Escola' },
    { src: '/images/infancia-2.jpg', category: 'Infância', title: 'Apresentação Escola' },
    { src: '/images/infancia-3.jpg', category: 'Infância', title: 'Grupo do Projeto' },
    { src: '/images/infancia-4.jpg', category: 'Infância', title: 'Escola Municipal Paul Harris' },

    // Outros
    { src: '/images/casadadanca-2017.jpg', category: 'Workshops', title: 'Casa da Dança 2017' },
    { src: '/images/about-1.jpg', category: 'Profissional', title: 'Editorial' },
    { src: '/images/about-2.jpg', category: 'Profissional', title: 'ANJUSS Session' },
]

const categories = ['Todos', 'Profissional', 'Jobs', 'Dance House', 'Premiações', 'Infância', 'Workshops']

export const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Todos')
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const filteredImages = activeCategory === 'Todos'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)

    const openLightbox = (index: number) => setSelectedImage(index)
    const closeLightbox = () => setSelectedImage(null)
    const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % filteredImages.length : null)
    const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null)

    return (
        <section id="gallery" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-widest uppercase bg-accent/20 text-accent rounded-full mb-4">
                        <Camera className="w-4 h-4" /> Galeria
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                        MOMENTOS <span className="text-gradient">MARCANTES</span>
                    </h2>
                </motion.div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? 'bg-secondary text-white'
                                    : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => openLightbox(index)}
                            className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-xs text-secondary font-bold uppercase">{image.category}</p>
                                    <p className="text-sm text-white font-medium">{image.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                            onClick={closeLightbox}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                src={filteredImages[selectedImage].src}
                                alt={filteredImages[selectedImage].title}
                                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />

                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                                <p className="text-xs text-secondary font-bold uppercase">{filteredImages[selectedImage].category}</p>
                                <p className="text-white font-medium">{filteredImages[selectedImage].title}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
