"use client";

import { motion } from 'framer-motion';
import { FaBrain, FaChild, FaNotesMedical, FaRegClock } from 'react-icons/fa';

export default function AutismPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-[var(--primary-purple)] text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Hablemos de Autismo
                    </motion.h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Conocer y entender es el primer paso para la inclusión real.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20 space-y-20">

                {/* Qué es el Autismo */}
                <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-[var(--primary-purple)] text-3xl">
                                <FaBrain />
                            </div>
                            <h2 className="text-3xl font-bold text-[var(--text-primary)]">¿Qué es el Autismo?</h2>
                        </div>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                            El Trastorno del Espectro Autista (TEA) o Condición del Espectro Autista (CEA) es una condición del neurodesarrollo que influye en la manera en que una persona percibe e interactúa con el mundo.
                        </p>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            No es una enfermedad, sino una forma diferente de procesar la información. Se manifiesta principalmente en la comunicación, la interacción social y la flexibilidad del comportamiento o pensamiento.
                        </p>
                    </div>
                    <div className="bg-[var(--light-lavender)] p-8 rounded-[var(--radius-md)] border border-purple-100">
                        <h3 className="font-bold text-xl mb-4 text-[var(--primary-purple)]">Características Comunes</h3>
                        <ul className="space-y-3">
                            {[
                                "Desafíos en la comunicación verbal y no verbal.",
                                "Dificultades en la interacción social recíproca.",
                                "Patrones de comportamiento repetitivos o intereses restringidos.",
                                "Hipersensibilidad o hiposensibilidad sensorial.",
                                "Preferencia por rutinas y estructuras predecibles."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></span>
                                    <span className="text-[var(--text-secondary)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Diagnóstico e Intervención */}
                <motion.div {...fadeInUp}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-[var(--accent-teal)] text-3xl">
                            <FaChild />
                        </div>
                        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Diagnóstico e Intervención Temprana</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-[var(--radius-md)] shadow-sm border border-gray-100">
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <FaNotesMedical className="text-[var(--accent-teal)]" /> Importancia del Diagnóstico
                            </h4>
                            <p className="text-gray-600">
                                Un diagnóstico oportuno permite comprender las necesidades específicas de cada niño/a y acceder a los apoyos adecuados. No define a la persona, pero brinda una hoja de ruta para su desarrollo.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-[var(--radius-md)] shadow-sm border border-gray-100">
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <FaRegClock className="text-[var(--accent-teal)]" /> Intervención Temprana
                            </h4>
                            <p className="text-gray-600">
                                La plasticidad cerebral en los primeros años es clave. Las terapias de fonoaudiología, terapia ocupacional y psicología pueden potenciar habilidades y estrategias de afrontamiento desde temprana edad.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Current Diagnosis DSM-5 */}
                <motion.div {...fadeInUp} className="bg-[var(--bg-light)] p-8 md:p-12 rounded-[var(--radius-lg)]">
                    <h2 className="section-title mb-8">Diagnóstico Actual (DSM-5)</h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-10 text-center max-w-3xl mx-auto">
                        Actualmente, el autismo se entiende como un espectro único con diferentes necesidades de apoyo.
                        El Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5) clasifica el TEA según el nivel de ayuda que la persona requiere en dos áreas principales:
                        <strong> Comunicación Social</strong> y <strong>Comportamientos Restringidos/Repetitivos</strong>.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Level 1 */}
                        <div className="bg-white p-6 rounded-[var(--radius-md)] border-t-8 border-[#a3c4f3] shadow-sm">
                            <div className="text-center mb-4">
                                <span className="bg-[#a3c4f3] text-[#1a1a1a] font-bold px-3 py-1 rounded-full text-sm">GRADO 1</span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-[var(--text-primary)]">Necesita Ayuda</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Sin apoyo, las dificultades en la comunicación social causan alteraciones notables. Dificultad para iniciar interacciones sociales y respuestas atípicas o fallidas a la apertura social de otros.
                            </p>
                        </div>

                        {/* Level 2 */}
                        <div className="bg-white p-6 rounded-[var(--radius-md)] border-t-8 border-[#8e4bb5] shadow-sm transform md:-translate-y-4">
                            <div className="text-center mb-4">
                                <span className="bg-[#8e4bb5] text-white font-bold px-3 py-1 rounded-full text-sm">GRADO 2</span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-[var(--text-primary)]">Necesita Ayuda Notable</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Déficits marcados en habilidades de comunicación social verbal y no verbal; inadaptaciones sociales aparentes incluso con ayuda in situ; inicio limitado de interacciones sociales; y respuestas reducidas o anormales.
                            </p>
                        </div>

                        {/* Level 3 */}
                        <div className="bg-white p-6 rounded-[var(--radius-md)] border-t-8 border-[#66248d] shadow-sm">
                            <div className="text-center mb-4">
                                <span className="bg-[#66248d] text-white font-bold px-3 py-1 rounded-full text-sm">GRADO 3</span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-[var(--text-primary)]">Necesita Ayuda Muy Notable</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Déficits severos en habilidades de comunicación social verbal y no verbal causan alteraciones severas en el funcionamiento, inicio muy limitado de las interacciones sociales y respuesta mínima a la apertura social de otros.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
