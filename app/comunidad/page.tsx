"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaUsers, FaCheckCircle } from 'react-icons/fa';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function CommunityPage() {
    const [form, setForm] = useState({ nombre: '', rut: '', email: '', telefono: '', direccion: '', motivo: '' });
    const [state, setState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        setState('loading');
        setErrorMsg('');
        try {
            const res = await fetch('/api/solicitud', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Error al enviar.');
            }
            setState('success');
            setForm({ nombre: '', rut: '', email: '', telefono: '', direccion: '', motivo: '' });
        } catch (err: unknown) {
            setState('error');
            setErrorMsg(err instanceof Error ? err.message : 'Error al enviar. Intenta nuevamente.');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-[var(--primary-purple)] text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <FaUsers className="text-6xl mx-auto mb-4 text-[var(--accent-yellow)]" />
                        <h1 className="text-4xl font-bold mb-4">Sé Parte de Nuestra Comunidad</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90">
                            Juntos somos más fuertes. Únete a nuestra corporación y trabajemos unidos por la inclusión.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Membership Benefits & Regulations */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-[var(--primary-purple)] mb-8">Hazte Socio</h2>
                        <div className="prose text-[var(--text-secondary)] mb-8">
                            <p className="mb-4">
                                Al ser socio de ONG Ojitos de Luz, te integras a una red de apoyo mutuo donde cada familia cuenta. Tu participación es fundamental para el crecimiento de nuestros objetivos.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Acceso a talleres y formaciones exclusivas.",
                                    "Participación en la toma de decisiones de la ONG.",
                                    "Descuentos en terapias y convenios.",
                                    "Red de apoyo y contención familiar."
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[var(--accent-teal)] flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[var(--light-lavender)] p-6 rounded-[var(--radius-md)] border border-purple-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                            <FaFilePdf className="text-4xl text-red-500" />
                            <div>
                                <h3 className="font-bold text-[var(--primary-purple)]">Reglamento Interno</h3>
                                <p className="text-sm text-gray-500">Descarga nuestro reglamento para conocer tus derechos y deberes.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-[var(--radius-lg)] shadow-lg border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">Formulario de Ingreso</h3>

                        {state === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                <FaCheckCircle className="text-6xl text-[var(--accent-teal)]" />
                                <h4 className="text-xl font-bold text-[var(--primary-purple)]">¡Solicitud enviada!</h4>
                                <p className="text-gray-500">Revisá tu correo electrónico. Te enviamos una confirmación con los datos ingresados.</p>
                                <button onClick={() => setState('idle')} className="btn btn-outline mt-4">Enviar otra solicitud</button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-600">Nombre Completo</label>
                                        <input name="nombre" value={form.nombre} onChange={handleChange} type="text" required className="w-full px-4 py-2 rounded-[var(--radius-sm)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-gray-600">RUT</label>
                                        <input name="rut" value={form.rut} onChange={handleChange} type="text" required className="w-full px-4 py-2 rounded-[var(--radius-sm)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-600">Correo Electrónico</label>
                                    <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full px-4 py-2 rounded-[var(--radius-sm)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-600">Teléfono</label>
                                    <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" required className="w-full px-4 py-2 rounded-[var(--radius-sm)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-600">Dirección</label>
                                    <input name="direccion" value={form.direccion} onChange={handleChange} type="text" required className="w-full px-4 py-2 rounded-[var(--radius-sm)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-600">Motivo de ingreso</label>
                                    <textarea name="motivo" value={form.motivo} onChange={handleChange} rows={3} required className="w-full px-4 py-2 rounded-[var(--radius-sm)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]"></textarea>
                                </div>

                                {state === 'error' && (
                                    <p className="text-red-500 text-sm text-center">{errorMsg}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={state === 'loading'}
                                    className="w-full btn btn-primary mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {state === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    * Al enviar este formulario, aceptas ser contactado por la directiva.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
