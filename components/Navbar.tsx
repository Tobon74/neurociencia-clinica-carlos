'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectamos el scroll para el efecto de "vidrio empañado" (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo Minimalista: El punto simboliza precisión y enfoque */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="w-6 h-6 bg-[#2D3436] rounded-full flex items-center justify-center group-hover:bg-[#A3C9E1] transition-all duration-500">
             <span className="text-white text-[10px]">●</span>
          </div>
          <span className="font-heading text-xl tracking-tighter text-[#2D3436] group-hover:text-gray-500 transition-colors">
            Carlos Villa
          </span>
        </Link>

        {/* Links de Navegación: Mucho aire para reducir carga cognitiva */}
        <div className="hidden md:flex space-x-12">
          {[
            { name: 'Sobre mí', href: '/sobre-mi' },
            { name: 'Precios', href: '/precios' },
            { name: 'Políticas', href: '/politicas' },
            { name: 'Blog', href: '/blog' }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] font-body tracking-[0.2em] uppercase text-gray-400 hover:text-[#2D3436] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botón de Acción (Embudo de Conversión) */}
        <Link 
          href="https://wa.me/tu-numero" 
          target="_blank"
          className="px-7 py-2.5 bg-[#2D3436] text-white text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#A3C9E1] hover:shadow-lg hover:shadow-[#A3C9E1]/30 transition-all duration-500 ease-in-out"
        >
          Agendar
        </Link>
      </div>
    </nav>
  );
}