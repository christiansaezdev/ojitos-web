"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaLightbulb, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import TeamMemberCard from '../components/TeamMemberCard';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--light-lavender)] py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-[var(--primary-purple)] mb-6"
          >
            ONG Ojitos de Luz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8"
          >
            Iluminando el camino hacia la inclusión y el entendimiento del espectro autista.
          </motion.p>
          <motion.a
            href="/donaciones"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="btn btn-primary text-lg px-8"
          >
            Apoya nuestra causa
          </motion.a>
        </div>

        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary-purple)] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-teal)] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Quienes Somos / Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Nuestra Historia</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Nacimos de la necesidad de crear espacios de contención y desarrollo para niños, niñas y adolescentes con CEA (Condición del Espectro Autista) en Longaví. Un grupo de familias y profesionales nos unimos con el sueño de visibilizar, educar y brindar herramientas concretas para mejorar la calidad de vida de nuestra comunidad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="bg-[var(--bg-light)] p-8 rounded-[var(--radius-md)] border-l-4 border-[var(--primary-purple)]">
              <div className="flex items-center gap-4 mb-4">
                <FaHeart className="text-3xl text-[var(--primary-purple)]" />
                <h3 className="text-2xl font-bold text-[var(--primary-purple)]">Misión</h3>
              </div>
              <p className="text-[var(--text-secondary)]">
                Promover la inclusión social y educativa de las personas con CEA, brindando apoyo integral a ellas y sus familias a través de terapias, talleres y concientización comunitaria.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-[var(--bg-light)] p-8 rounded-[var(--radius-md)] border-l-4 border-[var(--accent-teal)]">
              <div className="flex items-center gap-4 mb-4">
                <FaLightbulb className="text-3xl text-[var(--accent-teal)]" />
                <h3 className="text-2xl font-bold text-[var(--accent-teal)]">Visión</h3>
              </div>
              <p className="text-[var(--text-secondary)]">
                Ser un referente regional en el abordaje integral del autismo, construyendo una sociedad longaviana donde la neurodivergencia sea comprendida, respetada y valorada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directorio */}
      <section className="py-20 bg-[var(--light-lavender)]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nuestro Directorio</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMemberCard name="Sindia Troncoso" role="Presidenta" imageUrl="/fotos/sindia_troncoso_presidenta.jpeg" />
            <TeamMemberCard name="Yolanda Núñez" role="Vicepresidenta" imageUrl="/fotos/yolanda_nunez_vicepresidenta.jpeg" />
            <TeamMemberCard name="Alexandra Rodríguez" role="Secretaria" imageUrl="/fotos/alexandra_rodriguez_secretaria.jpeg" />
            <TeamMemberCard name="Natalie Cerda" role="Vicesecretaria" imageUrl="/fotos/natalie_cerda_viceSecretaria.jpeg" />
            <TeamMemberCard name="Rocío Rivas" role="Tesorera" imageUrl="/fotos/rocio_rivas_tesorera.jpeg" />
            <TeamMemberCard name="Luis Leiva" role="Director" imageUrl="/fotos/luis_leiva_directorjpeg.jpeg" />
          </div>
        </div>
      </section>

      {/* Foto Grupal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Unidos Por Una Causa</h2>
          <div className="relative w-full max-w-5xl mx-auto h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/fotos/grupales2.jpeg"
              alt="ONG Ojitos de Luz - Foto grupal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>


      {/* Colaboradores / Alianzas */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" style={{display:"none"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-12">Nuestras Alianzas</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2 mx-auto text-xl font-bold text-gray-400">Logo 1</div>
              <p className="text-sm font-semibold">Municipalidad</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2 mx-auto text-xl font-bold text-gray-400">Logo 2</div>
              <p className="text-sm font-semibold">Empresa Local</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2 mx-auto text-xl font-bold text-gray-400">Logo 3</div>
              <p className="text-sm font-semibold">Fundación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto & Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[var(--primary-purple)] mb-8">Contáctanos</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-[var(--primary-purple)] text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Correo Electrónico</p>
                  <p className="font-semibold">ojitosdeluzong@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xl">
                  <FaInstagram />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="font-semibold">@cea.ojitosdeluz</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono Presidenta</p>
                  <p className="font-semibold">+56 9 3374 0935</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Box */}
          <motion.div
            {...fadeInUp}
            className="bg-[var(--primary-purple)] text-white p-8 rounded-[var(--radius-lg)] shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FaHandHoldingHeart className="text-3xl text-[var(--accent-yellow)]" />
                <h3 className="text-2xl font-bold">Suscríbete</h3>
              </div>
              <p className="mb-6 text-purple-100">
                Recibe noticias sobre nuestras actividades, talleres y avances en la comunidad.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)]"
                />
                <button type="button" className="btn bg-white text-[var(--primary-purple)] hover:bg-gray-100 transition-colors font-bold">
                  Suscribirse al Newsletter
                </button>
              </form>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
