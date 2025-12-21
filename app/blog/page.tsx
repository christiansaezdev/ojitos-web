"use client";

import { motion } from 'framer-motion';
import { FaPaintBrush, FaHammer } from 'react-icons/fa';

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl bg-[var(--light-lavender)] p-12 rounded-[var(--radius-lg)] shadow-sm border border-purple-100"
            >
                <div className="flex justify-center gap-4 mb-6 text-4xl text-[var(--primary-purple)]">
                    <FaPaintBrush />
                    <FaHammer className="text-[var(--accent-teal)]" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-purple)] mb-6">
                    Espacio de Actividades en Construcción
                </h1>
                <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                    Estamos trabajando con mucho cariño para crear un espacio donde compartir nuestras actividades, logros y recursos para brindar el mejor apoyo a nuestros niños y niñas.
                </p>
                <p className="font-medium text-[var(--accent-teal)]">
                    ¡Pronto novedades!
                </p>
            </motion.div>
        </div>
    );
}
