import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-light)] text-[var(--text-secondary)] py-12 border-t border-gray-200">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold text-[var(--primary-purple)] mb-4">Ojitos de Luz</h3>
                    <p className="text-sm leading-relaxed mb-4">
                        ONG dedicada a concientizar sobre el espectro autista y crear un entorno inclusivo en Longaví, Chile.
                    </p>
                    <div className="flex gap-4 text-2xl text-[var(--primary-purple)]">
                        <a href="https://instagram.com/cea.ojitosdeluz" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://facebook.com/CEA OJITOS de Luz" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="#" className="opacity-50 cursor-not-allowed" title="Próximamente"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-4 text-[var(--text-primary)]">Enlaces Rápidos</h4>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><Link href="/autismo" className="hover:text-[var(--primary-purple)]">Información sobre Autismo</Link></li>
                        <li><Link href="/comunidad" className="hover:text-[var(--primary-purple)]">Hazte Socio</Link></li>
                        <li><Link href="/donaciones" className="hover:text-[var(--primary-purple)]">Realizar Donación</Link></li>
                        <li><Link href="/blog" className="hover:text-[var(--primary-purple)]">Actividades Recientes</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold mb-4 text-[var(--text-primary)]">Contacto</h4>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><strong>Email:</strong> ojitosdeluzong@gmail.com</li>
                        <li><strong>Ubicación:</strong> Longaví, Maule, Chile</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} ONG Ojitos de Luz. Todos los derechos reservados.
            </div>
        </footer>
    );
}
