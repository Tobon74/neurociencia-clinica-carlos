import Link from 'next/link';

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24 space-y-20 animate-fade-in">
      <header className="space-y-4 text-center">
        <h1 className="font-heading text-6xl text-deep-neuro underline decoration-ocean-calm/30 underline-offset-8">
          Divulgación
        </h1>
        <p className="font-body text-xl text-gray-400">Análisis, neurociencia y salud mental basada en evidencia.</p>
      </header>

      {/* Artículo Principal: Proyecto UNAM */}
      <article className="group grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50">
        <div className="h-80 bg-ocean-calm/10 rounded-[30px] flex items-center justify-center overflow-hidden relative">
           <div className="text-ocean-calm text-6xl font-heading opacity-50 italic select-none">Data</div>
           {/* Overlay sutil para la imagen */}
           <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.3em] text-accent-soft font-bold uppercase">Investigación Académica • UNAM</span>
            <h2 className="font-heading text-4xl text-deep-neuro group-hover:text-accent-soft transition-colors duration-300 leading-tight">
              Neuroeducación <span className="italic text-ocean-calm">&</span> ODS en México
            </h2>
          </div>
          
          <p className="font-body text-gray-500 leading-relaxed text-sm">
            Explora el dashboard interactivo de 32MB sobre la vulnerabilidad neuroeducativa y su relación con el desarrollo sostenible.
          </p>
          
          <div className="pt-4">
            <Link 
              href="/blog/neuroeducacion-ods" 
              className="
                inline-block px-10 py-4 rounded-full font-body text-[10px] uppercase tracking-[0.25em] font-bold
                /* EFECTO CRISTALIZADO INICIAL */
                bg-white/40 backdrop-blur-sm border border-gray-200 text-gray-400
                /* REVELACIÓN DE COLOR AL PASAR EL CURSOR */
                hover:bg-deep-neuro hover:text-white hover:border-deep-neuro hover:shadow-lg
                /* TRANSICIÓN Y ESCALA */
                transition-all duration-500 hover:scale-105 active:scale-95
              "
            >
              Abrir Dashboard
            </Link>
          </div>
        </div>
      </article>

      <div className="pt-20 border-t border-gray-100 text-center">
        <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest italic opacity-50">
          Explorando la intersección entre datos y psique
        </p>
      </div>
    </div>
  );
}