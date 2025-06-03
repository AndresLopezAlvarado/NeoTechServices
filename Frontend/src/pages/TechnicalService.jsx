import { Link } from "react-router";

export const TechnicalService = () => {
  return (
    <main className="h-full">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Soporte y Servicio Técnico Especializado
          </h1>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
          >
            Solicita atención técnica
          </Link>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="mb-6 text-gray-700 text-lg text-justify">
            Ofrecemos servicio técnico confiable para mantener tus equipos
            funcionando al 100%. Desde reparaciones de hardware hasta soporte
            remoto, resolvemos tus problemas tecnológicos con rapidez y
            eficiencia.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Reparación y mantenimiento de computadores y portátiles.</li>
            <li>Instalación de sistemas operativos y software.</li>
            <li>Eliminación de virus y optimización de rendimiento.</li>
            <li>Respaldo y recuperación de datos.</li>
            <li>Soporte técnico remoto y a domicilio.</li>
            <li>Configuración de redes e impresoras.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">
          ¿Tienes un equipo con fallas? ¡Nosotros lo solucionamos!
        </h3>

        <p className="mb-6">Contáctanos y agenda tu servicio técnico.</p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
        >
          Solicita atención técnica
        </Link>
      </section>
    </main>
  );
};
