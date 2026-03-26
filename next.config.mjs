/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Esta es la ruta que Google tiene indexada y da 404
        source: '/psicologo-en-la-colonia-del-valle-cdmx.html',
        // Mandamos al usuario a tu nueva página principal profesional
        destination: '/', 
        permanent: true, // Esto le dice a Google: "Actualiza tu índice, me moví aquí"
      },
      {
        // Lo mismo para la otra URL que aparecía en tu captura
        source: '/psicologo-clinico-neurociencia-cdmx.html',
        destination: '/sobre-mi',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;