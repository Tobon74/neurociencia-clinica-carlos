import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Navbar from "../components/Navbar"; // AQUÍ IMPORTAMOS TU NUEVO NAVBAR ESTRELLA

export const metadata: Metadata = {
  title: "Psicólogo en Colonia del Valle CDMX | Terapia Individual y de Pareja",
  description: "Psicólogo profesional en Colonia del Valle, CDMX. Terapia con enfoque en neurociencias, logoterapia y salud mental. Agenda tu cita con Carlos Villa Tobón.",
  verification: {
    google: "S7SF9aB8nyCwgC2VcfOyU3S4FAnuP8ipskbEtpmBQ5E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Aquí puedes pegar tus scripts de JSON-LD si los necesitas */}
      </head>
      <body className="bg-cloud-dancer antialiased min-h-screen flex flex-col">
        
        {/* --- NUEVO NAVBAR INTELIGENTE --- */}
        {/* Esto llama al archivo Navbar.tsx que acabamos de crear */}
        <Navbar />

        {/* CONTENIDO PRINCIPAL */}
        <main className="pt-24 flex-grow">
          {children}
        </main>

        {/* --- FOOTER PROFESIONAL --- */}
        <footer className="bg-white border-t border-gray-100 mt-24">
          <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* INFO PROFESIONAL */}
            <div className="space-y-4">
              <p className="font-heading text-xl text-deep-neuro">Carlos Villa Tobón</p>
              <p className="font-body text-xs text-gray-500 leading-relaxed">
                Psicólogo Clínico y Neurocientífico.<br />
                Científico de Datos aplicado a la Salud Mental.<br />
                Colonia del Valle, CDMX.
              </p>
            </div>

            {/* REDES SOCIALES */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-accent-soft font-bold">Conecta</h4>
              <div className="flex flex-col space-y-3 font-body text-[10px] uppercase tracking-widest text-gray-400">
                <Link href="https://www.linkedin.com/in/carlos-alberto-villa-tobon-4a336366/" target="_blank" className="hover:text-deep-neuro transition-colors">
                  LinkedIn
                </Link>
                <Link href="https://youtube.com/@mrneuropsicocarlos?si=8j5-CrzSi7ZgVp3p" target="_blank" className="hover:text-deep-neuro transition-colors">
                  YouTube
                </Link>
                <Link href="https://www.facebook.com/NeuropsicologoCarlosVillaTobon/" target="_blank" className="hover:text-deep-neuro transition-colors">
                  Facebook
                </Link>
              </div>
            </div>

            {/* ACCIÓN FINAL */}
            <div className="space-y-4 flex flex-col items-center md:items-end">
               <Link href="https://calendly.com/carlosvillatobon/30min" target="_blank" className="px-8 py-4 bg-cloud-dancer text-deep-neuro rounded-full font-body text-[10px] uppercase tracking-widest border border-gray-100 hover:border-gray-200 transition-all shadow-sm">
                  Agendar Sesión
               </Link>
            </div>
          </div>

          <div className="bg-gray-50 py-6 text-center border-t border-gray-100">
            <p className="text-[9px] font-body text-gray-400 uppercase tracking-[0.4em]">
              © 2026 Carlos Villa Tobón — Neurociencia & Logoterapia
            </p>
          </div>
        </footer>

        {/* SCRIPTS DE CALENDLY */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <Script id="calendly-config" strategy="lazyOnload">
          {`
            function initCalendly() {
              if (window.Calendly) {
                Calendly.initBadgeWidget({
                  url: 'https://calendly.com/carlosvillatobon/30min',
                  text: 'Agenda ahora',
                  color: '#0069ff',
                  textColor: '#ffffff',
                  branding: true
                });
              } else {
                setTimeout(initCalendly, 500);
              }
            }
            initCalendly();
          `}
        </Script>
      </body>
    </html>
  );
}