"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
    { name: 'Inicio', href: '/' },
    { name: 'Autismo', href: '/autismo' },
    { name: 'Comunidad', href: '/comunidad' },
    { name: 'Donar', href: '/donaciones', isButton: true },
    { name: 'Blog', href: '/blog' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 h-[var(--header-height)] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-80 h-32">
                        <Image
                            src="/logo.png"
                            alt="Ojitos de Luz Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-semibold transition-colors ${item.isButton
                                ? 'btn btn-primary text-white'
                                : pathname === item.href
                                    ? 'text-[var(--primary-purple)]'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--primary-purple)]'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-[var(--primary-purple)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium py-2 border-b border-gray-50 last:border-0 ${item.isButton
                                        ? 'text-[var(--primary-purple)] font-bold'
                                        : pathname === item.href
                                            ? 'text-[var(--primary-purple)]'
                                            : 'text-[var(--text-secondary)]'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
