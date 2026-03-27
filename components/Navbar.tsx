'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detectamos el scroll para el efecto de "vidrio empañado" (Glassmorphism) en Desktop
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
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-50">
        
        {/* LOGO MINIMALISTA */}
        <Link href="/" className="group flex items-center space-x-3 z-50">
          <div className="w-6 h-6 bg-deep-neuro rounded-full flex items-center justify-center group-hover:bg-accent-soft transition-all duration-500">
             <span className="text-white text-[10px]">●</span>
          </div>
          <span className="font-heading text-xl tracking-tighter text-deep-neuro group-hover:text-gray-500 transition-colors">
            Carlos Villa
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP (Invisible en móviles) */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {[
            { name: 'Sobre mí', href: '/sobre-mi' },
            { name: 'Precios', href: '/precios' },
            { name: 'Políticas', href: '/politicas' },
            { name: 'Blog', href: '/blog' }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] font-body tracking-[0.2em] uppercase text-gray-500 hover:text-deep-neuro transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="https://wa.me/525510645143?text=Hola%20Carlos,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita." 
            target="_blank"
            className="text-[10px] font-body tracking-[0.2em] uppercase text-gray-500 hover:text-[#25D366] transition-colors duration-300 font-bold"
          >
            WhatsApp
          </Link>

          <Link 
            href="https://calendly.com/carlosvillatobon/30min" 
            target="_blank"
            className="px-7 py-2.5 bg-deep-neuro text-white text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-accent-soft hover:shadow-lg hover:shadow-accent-soft/30 transition-all duration-500 ease-in-out"
          >
            Agendar
          </Link>
        </div>

       {/* BOTÓN HAMBURGUESA ANIMADO (Alta Visibilidad) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          {/* Usamos bg-gray-900 para garantizar que sea negro oscuro y visible */}
          <span className={`block w-5 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-5 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Glassmorphism y The Pudding Style) */}
      <div 
        className={`md:hidden fixed inset-x-0 top-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out z-40 flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'h-screen opacity-100 pt-20 pb-10' : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        {[
          { name: 'Sobre mí', href: '/sobre-mi' },
          { name: 'Precios', href: '/precios' },
          { name: 'Políticas', href: '/politicas' },
          { name: 'Blog', href: '/blog' }
        ].map((link, index) => (
          <Link 
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-[12px] font-body tracking-[0.3em] uppercase text-gray-500 hover:text-deep-neuro transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
        
        <Link 
          href="https://wa.me/525510645143?text=Hola%20Carlos,%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita." 
          target="_blank"
          onClick={() => setIsOpen(false)}
          className={`text-[12px] font-body tracking-[0.3em] uppercase text-[#25D366] font-bold hover:text-deep-neuro transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          Escribir por WhatsApp
        </Link>

        <Link 
          href="https://calendly.com/carlosvillatobon/30min" 
          target="_blank"
          onClick={() => setIsOpen(false)}
          className={`mt-4 px-10 py-4 bg-deep-neuro text-white rounded-full text-[11px] tracking-[0.2em] uppercase hover:bg-accent-soft hover:shadow-lg transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: '500ms' }}
        >
          Agendar en Calendario
        </Link>
      </div>
    </nav>
  );
}