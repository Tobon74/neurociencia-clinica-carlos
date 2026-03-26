import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-32 space-y-12 text-center">
      <span className="uppercase tracking-[0.3em] text-xs text-accent-soft font-body font-bold">
        Bienvenido al Consultorio Digital
      </span>
      <h1 className="font-heading text-6xl md:text-8xl text-deep-neuro leading-tight">
        Carlos Villa <span className="italic">Tobón</span>
      </h1>
      <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Psicología Clínica y Neurociencia aplicada para recuperar tu equilibrio en un mundo en constante movimiento.
      </p>
      
      <div className="flex justify-center gap-6 pt-10">
        <Link href="/sobre-mi" className="px-10 py-4 bg-deep-neuro text-white rounded-full font-body text-xs uppercase tracking-widest hover:bg-accent-soft transition-all">
          Explorar mi enfoque
        </Link>
        <Link href="/precios" className="px-10 py-4 border border-gray-200 text-deep-neuro rounded-full font-body text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
          Ver servicios
        </Link>
      </div>
    </div>
  );
}