export default function Politicas() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24 space-y-16 animate-fade-in">
      <header className="space-y-4">
        <span className="uppercase tracking-[0.3em] text-[10px] text-accent-soft font-bold">Ética Profesional</span>
        <h1 className="font-heading text-5xl text-deep-neuro">Políticas del Consultorio</h1>
        <p className="font-body text-gray-500 max-w-2xl leading-relaxed">
          Para garantizar la calidad del proceso terapéutico y el respeto al tiempo de ambos, nos regimos bajo los siguientes lineamientos.
        </p>
      </header>

      <div className="grid gap-12 font-body text-gray-600 leading-relaxed">
        <section className="space-y-4 border-l-2 border-ocean-calm/20 pl-8">
          <h2 className="font-heading text-xl text-deep-neuro uppercase tracking-widest">1. Cancelaciones y Reagendas</h2>
          <p>Toda sesión debe ser cancelada o reprogramada con al menos <strong>24 horas de anticipación</strong>. De lo contrario, la sesión se considerará como realizada y deberá ser cubierta en su totalidad.</p>
        </section>

        <section className="space-y-4 border-l-2 border-ocean-calm/20 pl-8">
          <h2 className="font-heading text-xl text-deep-neuro uppercase tracking-widest">2. Puntualidad</h2>
          <p>La sesión tiene una duración de 50 minutos. En caso de retraso por parte del paciente, la sesión terminará a la hora programada originalmente para no afectar al siguiente consultante.</p>
        </section>

        <section className="space-y-4 border-l-2 border-ocean-calm/20 pl-8">
          <h2 className="font-heading text-xl text-deep-neuro uppercase tracking-widest">3. Sesiones en Línea</h2>
          <p>Es responsabilidad del paciente contar con una conexión estable y un espacio privado. El pago de las sesiones online debe realizarse al menos 2 horas antes del inicio de la misma.</p>
        </section>
      </div>

      <footer className="pt-12 border-t border-gray-100">
        <p className="text-xs text-gray-400 italic">Última actualización: Marzo 2026. Carlos Villa - Neurociencia & Psicología Clínica.</p>
      </footer>
    </div>
  );
}