export default function SobreMi() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24 space-y-32">
      
      {/* SECCIÓN 1: HERO */}
      <section className="flex flex-col items-center text-center space-y-8">
        <span className="uppercase tracking-[0.3em] text-xs text-accent-soft font-body">Psicología Clínica & Neurociencia</span>
        <h1 className="font-heading text-6xl md:text-7xl text-deep-neuro leading-tight">
          Sana la mente <br /> 
          <span className="italic">desde su origen.</span>
        </h1>
        <p className="font-body text-xl text-gray-500 max-w-xl leading-relaxed">
          Entender el cerebro no es solo ciencia; es el mapa para recuperar tu paz en un mundo que no se detiene.
        </p>
        <div className="pt-10">
          <div className="w-px h-24 bg-gradient-to-b from-ocean-calm to-transparent"></div>
        </div>
      </section>

      {/* SECCIÓN 2: HISTORIA EDITORIAL (Grid balanceado) */}
      <section className="grid md:grid-cols-2 gap-20 items-start">
        <div className="md:sticky md:top-32 space-y-8">
          <h2 className="font-heading text-4xl text-deep-neuro leading-snug">
            De los algoritmos <br /> al latido humano.
          </h2>
          <div className="space-y-6 text-lg text-gray-600 font-body leading-relaxed">
            <p>
              Mi camino empezó entre líneas de código e ingeniería. Buscaba respuestas en la lógica pura, hasta que descubrí que la estructura más compleja no es un procesador, sino el cerebro humano.
            </p>
            <p>
              Esa dualidad me permite ofrecerte algo distinto: la precisión de la <strong>neurociencia</strong> unida a la calidez de la <strong>psicología clínica</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-50 space-y-6">
            <h3 className="font-heading text-2xl">Datos con alma.</h3>
            <p className="text-gray-500">
              En la CDMX, el entorno nos sobreestimula. Mi enfoque utiliza evidencia científica para crear estrategias personalizadas de regulación emocional.
            </p>
            <div className="h-2 bg-ocean-calm/20 rounded-full w-1/3"></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: EL MAPA CIENTÍFICO (Fuera del grid para que no se encime) */}
      <section className="py-12">
        <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl text-deep-neuro mb-4">
              Evidencia y Contexto
            </h2>
            <p className="font-body text-gray-500">
              Análisis dinámico de la tasa de suicidios en México. La neurociencia clínica no puede ignorar los datos sociodemográficos.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-[#F8F9FA] border border-gray-50 shadow-inner" style={{ paddingTop: '56.25%' }}>
            {/* IMPORTANTE: Verifica que el nombre coincida exactamente con el archivo en public/plots/ */}
            <iframe 
              src="/plots/salud_mental_mexico.html" 
              className="absolute top-0 left-0 w-full h-full border-none"
              title="Análisis Salud Mental México"
            />
          </div>

          <div className="mt-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
            <span>Fuente: INEGI / Serie Histórica</span>
            <span className="text-accent-soft italic underline">Interactividad Activa</span>
          </div>
        </div>
      </section>

    </div>
  );
}