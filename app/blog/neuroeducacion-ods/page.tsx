import Link from 'next/link';

export default function PaginaNeuroeducacion() {
  return (
    <div className="bg-cloud-dancer min-h-screen animate-fade-in">
      {/* Header Contextual con Estilo Editorial */}
      <header className="max-w-6xl mx-auto px-8 py-16 text-center space-y-4">
        <Link href="/blog" className="text-[10px] uppercase tracking-[0.3em] text-accent-soft hover:text-deep-neuro transition-colors font-bold">
          ← Regresar a Investigación
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl text-deep-neuro">
          Neuroeducación y ODS: <span className="italic">Visualización de Datos</span>
        </h1>
        <p className="font-body text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Análisis geoespacial y demográfico presentado ante la UNAM. Proyecto de ciencia de datos aplicada a la educación y salud mental.
        </p>
      </header>

      {/* El Dashboard (El archivo de 32MB que movimos) */}
      <section className="w-full h-[85vh] border-y border-gray-100 bg-white shadow-inner overflow-hidden">
        <iframe 
          src="/plots/neuroeducacion-ods-final.html" 
          className="w-full h-full border-none"
          title="Dashboard Neuroeducación UNAM"
          loading="lazy"
        />
      </section>

      {/* Footer del Reporte */}
      <footer className="max-w-4xl mx-auto px-8 py-12 text-center">
        <p className="text-xs text-gray-400 font-body uppercase tracking-[0.2em]">
          Carlos Villa Tobón | Neurociencia & Data Science
        </p>
      </footer>
    </div>
  );
}