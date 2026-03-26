'use client';

export default function Precios() {
  const servicios = [
    { 
      tipo: "Terapia Individual", 
      presencial: "$800", 
      online: "$700", 
      detalle: "Enfoque clínico-cognitivo para adultos y jóvenes." 
    },
    { 
      tipo: "Terapia de Pareja", 
      presencial: "$1,400", 
      online: "$1,300", 
      detalle: "Intervención sistémica y regulación emocional conjunta." 
    }
  ];

  const paquetes = [
    {
      titulo: "Ciclo de Equilibrio",
      subtitulo: "4 Sesiones Individuales Online",
      precio: "$2,500",
      ahorro: "Ahorras $300", // (Sobre el precio online de $700 x 4 = $2800)
      descripcion: "Ideal para quienes buscan orden y estabilidad tras una crisis o inicio de proceso.",
      color: "bg-ocean-calm/10"
    },
    {
      titulo: "Protocolo de Conexión",
      subtitulo: "4 Sesiones de Pareja Online",
      precio: "$4,800",
      ahorro: "Ahorras $400", // (Sobre el precio online de $1300 x 4 = $5200)
      descripcion: "Diseñado para facilitar el compromiso de un mes de reingeniería relacional.",
      color: "bg-deep-neuro/5"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-24 space-y-24">
      
      {/* HEADER ESTRATÉGICO */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="uppercase tracking-[0.3em] text-[10px] text-accent-soft font-bold">Inversión en Bienestar</span>
        <h1 className="font-heading text-5xl text-deep-neuro">Claridad y Compromiso</h1>
        <p className="font-body text-gray-500 text-lg leading-relaxed">
          Elegir el formato adecuado es el primer paso hacia el equilibrio. Ofrecemos tarifas preferenciales en modalidad online para asegurar que la distancia no sea una barrera.
        </p>
      </header>

      {/* TABLA DE PRECIOS BASE */}
      <section className="space-y-8">
        <h2 className="font-heading text-2xl text-deep-neuro text-center md:text-left">Sesiones Individuales</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((s, i) => (
            <div key={i} className="p-10 rounded-[32px] border border-gray-100 bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-heading text-3xl text-deep-neuro">{s.tipo}</h3>
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400">Presencial</span>
                  <span className="text-xl font-body text-gray-600">{s.presencial}</span>
                </div>
              </div>
              <div className="flex justify-between items-end border-t border-gray-50 pt-6">
                <p className="text-sm text-gray-400 max-w-[180px]">{s.detalle}</p>
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-widest text-ocean-calm font-bold">Online</span>
                  <span className="text-3xl font-heading text-deep-neuro">{s.online}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE PAQUETES (ACCIÓN) */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-heading text-4xl text-deep-neuro">Planes de Continuidad</h2>
          <p className="text-gray-400 font-body">Compromiso mensual con tarifa preferencial</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {paquetes.map((p, i) => (
            <div key={i} className={`${p.color} p-12 rounded-[40px] border border-transparent hover:border-ocean-calm/30 transition-all flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-heading text-2xl text-deep-neuro">{p.titulo}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-tighter bg-white px-3 py-1 rounded-full text-ocean-calm shadow-sm">
                    {p.ahorro}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{p.subtitulo}</p>
                <p className="font-body text-gray-600 leading-relaxed">{p.descripcion}</p>
              </div>
              <div className="mt-12 flex items-baseline space-x-2">
                <span className="text-5xl font-heading text-deep-neuro">{p.precio}</span>
                <span className="text-gray-400 text-sm font-body">/ Mes (4 ses.)</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <footer className="bg-[#2D3436] p-16 rounded-[40px] text-center space-y-8 text-white">
        <h3 className="font-heading text-3xl">¿Listo para comenzar tu proceso?</h3>
        <p className="font-body text-gray-400 max-w-xl mx-auto">
          Al agendar, confirma si prefieres modalidad presencial o en línea. Consulta nuestras <a href="/politicas" className="text-ocean-calm underline">políticas de cancelación</a>.
        </p>
        <button className="px-12 py-5 bg-white text-deep-neuro rounded-full font-body text-xs uppercase tracking-[0.2em] font-bold hover:bg-ocean-calm hover:text-white transition-all shadow-2xl">
          Agendar Sesión Inicial
        </button>
      </footer>
    </div>
  );
}