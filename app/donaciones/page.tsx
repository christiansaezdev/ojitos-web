"use client";

import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaCreditCard, FaUniversity } from 'react-icons/fa';
import { SiMercadopago } from 'react-icons/si';

export default function DonationsPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const DonationCard = ({ title, price, features, recommended = false }: { title: string, price: string, features: string[], recommended?: boolean }) => (
        <div className={`relative p-8 rounded-2xl border ${recommended ? 'border-[var(--primary-purple)] bg-purple-50 shadow-xl scale-105 z-10' : 'border-gray-200 bg-white shadow-md'} flex flex-col items-center text-center transition-transform hover:-translate-y-2`}>
            {recommended && (
                <span className="absolute -top-4 bg-[var(--accent-yellow)] text-[var(--primary-purple)] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Recomendado
                </span>
            )}
            <h3 className="text-xl font-bold text-[var(--primary-purple)] mb-2">{title}</h3>
            <div className="text-4xl font-extrabold text-gray-800 mb-6">{price}</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
            <button className={`w-full btn ${recommended ? 'btn-primary' : 'btn-outline'}`}>
                Sitio en Construccion ♥
            </button>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-[var(--primary-purple)] text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Tu Aporte Transforma Vidas
                    </motion.h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
                        "Cada año renovamos objetivos con la mirada puesta en la mejora de la calidad de vida de las personas con CEA y sus familias, propiciando entornos inclusivos."
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">

                {/* Impact Message */}
                <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-20 bg-white shadow-sm p-8 rounded-2xl border border-gray-100">
                    <FaHandHoldingHeart className="mx-auto text-5xl text-[var(--accent-teal)] mb-6" />
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
                        Tu aporte es fundamental para poder llevar a cabo esta labor. Estos aportes recibidos hacen posible que podamos ofrecer
                        <span className="font-bold text-[var(--primary-purple)]"> información, apoyo, acompañamiento, terapias, actividades y formación</span>, para concientizar y visibilizar la condición de los niños, niñas y adolescentes con CEA.
                    </p>
                    <p className="text-2xl font-bold text-[var(--primary-purple)] mt-6">
                        Con muy poco, puedes ayudar mucho.
                    </p>
                </motion.div>

                {/* Donation Options */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 " style={{display:"none"}}>
                    <DonationCard
                        title="Aporte Único"
                        price="$10.000"
                        features={["Ayuda puntual para materiales", "Certificado de donación digital", "Apoyo a talles inclusivos"]}
                    />
                    <DonationCard
                        title="Socio Mensual"
                        price="$5.000"
                        features={["Continuidad en terapias", "Acceso a informe de actividades", "Invitación a eventos exclusivos", "Certificado anual"]}
                        recommended={true}
                    />
                    <DonationCard
                        title="Aporte Anual"
                        price="$50.000"
                        features={["Impacto a largo plazo", "Apadrinamiento de una actividad", "Reconocimiento en nuestra web", "Certificado de donación"]}
                    />
                </div>

                {/* Bank Details & Additional Info */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Bank Transfer */}
                    <motion.div {...fadeInUp} className="bg-[var(--bg-light)] p-8 rounded-[var(--radius-md)]">
                        <div className="flex items-center gap-3 mb-6">
                            <FaUniversity className="text-3xl text-[var(--primary-purple)]" />
                            <h3 className="text-2xl font-bold text-[var(--primary-purple)]">Transferencia Bancaria</h3>
                        </div>
                        <div className="space-y-2 text-[var(--text-secondary)]">
                            <p><strong>Banco:</strong> BancoEstado</p>
                            <p><strong>Tipo de Cuenta:</strong> Chequera Electrónica</p>
                            <p><strong>Número de Cuenta:</strong> 44470252003</p>
                            <p><strong>RUT:</strong> 65.241.765-5</p>
                            <p><strong>Nombre:</strong> Organización No Gubernamental de Desarrollo CEA Ojitos de Luz Longaví</p>
                            <p><strong>Correo:</strong> ojitosdeluzong@gmail.com</p>
                        </div>
                    </motion.div>

                    {/* Mercado Pago & Continuity */}
                    <motion.div {...fadeInUp} className="flex flex-col justify-center space-y-6">
                        <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-[var(--radius-md)] flex flex-col items-center text-center opacity-70">
                            <h4 className="font-bold text-gray-400 mb-2 text-lg flex items-center gap-2">
                                <SiMercadopago className="text-3xl" /> Mercado Pago
                            </h4>
                            <span className="text-xs font-semibold uppercase tracking-widest bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Próximamente</span>
                            <p className="text-sm text-gray-400 mt-2">Tarjetas de crédito y débito.</p>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-[var(--radius-md)] border border-yellow-200">
                            <h4 className="font-bold text-gray-800 mb-2">Ley de Donaciones</h4>
                            <p className="text-sm text-gray-700">
                                Estamos trabajando para acogernos a la Ley de Donaciones y poder entregar certificados deducibles de impuestos. ¡Tu aporte hace posible que este proyecto siga adelante!
                            </p>
                            <p className="text-sm font-semibold text-[var(--primary-purple)] mt-2">Pagina en construcción para brindar apoyo a niños.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
