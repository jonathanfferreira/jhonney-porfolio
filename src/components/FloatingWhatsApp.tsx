import React from 'react'
import { MessageCircle } from 'lucide-react'

export const FloatingWhatsApp: React.FC = () => {
    return (
        <a
            href="https://wa.me/5547984970324?text=Olá%20Jhonney!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-black/90 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Fale comigo!
            </span>

            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        </a>
    )
}
