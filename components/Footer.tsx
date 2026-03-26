export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          
          {/* Columna 1: Filosofía */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl text-deep-neuro">Carlos Villa</h4>
            <p className="font-body text-sm text-gray-400 leading-loose">
              Integrando la neurociencia y la clínica para restaurar el equilibrio en entornos de alta complejidad.
            </p>
          </div>

          {/* Columna 2: Modalidad (Aquí acentuamos lo Online) */}
          <div className="space-y-6">
            <h4 className="font-heading text-sm uppercase tracking-widest text-accent-soft">Modalidad</h4>
            <ul className="font-body text-sm space-y-4 text-gray-500">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-ocean-calm rounded-full"></span>
                <span>Sesiones de Alta Precisión (Online)</span>
              </li>
              <li className="text-xs text-gray-400 pl-4 italic">
                Preferido por pacientes con agendas complejas.
              </li>
              <li className="flex items-center space-x-2 pt-2">
                <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                <span>Consulta Presencial (Col. Del Valle, CDMX)</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="space-y-6">
            <h4 className="font-heading text-sm uppercase tracking-widest text-accent-soft">Contacto</h4>
            <div className="font-body text-sm space-y-2 text-gray-500">
              <p>carlosvillatobon@gmailcom</p>
              <p className="text-deep-neuro font-bold">+52 55 1064 5143</p>
            </div>
          </div>
        </div>

        {/* Línea final minimalista */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-gray-400 font-body">
          <p>© 2026 Carlos Villa — Psicólogo Clínico y Neurocientífico</p>
          <div className="flex space-x-8">
            <a href="/politicas" className="hover:text-deep-neuro transition-colors">Privacidad</a>
            <a href="/blog" className="hover:text-deep-neuro transition-colors">Divulgación</a>
          </div>
        </div>
      </div>
    </footer>
  );
}