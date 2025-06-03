import { Link } from "react-router";

export const Consultancies = () => {
  return (
    <main className="h-full">
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Asesorías en Desarrollo Web y Tecnología
          </h1>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
          >
            Agenda una consulta
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="mb-6 text-gray-700 text-lg text-justify">
            Brindo asesorías personalizadas para emprendedores, empresas y
            profesionales que buscan orientación en desarrollo web, elección de
            tecnologías, planificación de proyectos, arquitectura de software y
            automatización de procesos. Acompaño desde la idea hasta la
            ejecución técnica.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Definición del stack tecnológico ideal para tu idea.</li>
            <li>Evaluación y planificación de MVPs.</li>
            <li>Diseño de arquitectura frontend y backend.</li>
            <li>Revisión de código y buenas prácticas de desarrollo.</li>
            <li>Automatización, APIs e integración con servicios externos.</li>
            <li>Asistencia en despliegue y optimización de rendimiento.</li>
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">
          ¿Necesitas una guía profesional para tu proyecto?
        </h3>

        <p className="mb-6">Contáctame y programa tu asesoría personalizada.</p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
        >
          Agenda una consulta
        </Link>
      </section>
    </main>
  );
};
