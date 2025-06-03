import { Link } from "react-router";

export const WebApps = () => {
  return (
    <main className="h-full">
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Desarrollo de Aplicaciones Web a tu medida
          </h1>

          <Link
            to="/price"
            className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
          >
            Solicita una cotización
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="mb-6 text-gray-700 text-lg text-justify">
            Creamos aplicaciones web modernas, rápidas y escalables usando
            tecnologías como React, Node.js, MongoDB, y más. Ya sea que
            necesites un sitio corporativo, una plataforma interactiva o una app
            para tu negocio, te ayudamos a digitalizar tu idea con calidad y
            soporte continuo.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>
              Interfaces intuitivas y atractivas con React y Tailwind CSS.
            </li>
            <li>APIs robustas y escalables con Node.js y Express.</li>
            <li>Base de datos flexible y eficiente con MongoDB.</li>
            <li>Autenticación segura con Auth0 y JWT.</li>
            <li>
              Implementación en la nube con Render.com y otras plataformas.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">
          ¿Listo para desarrollar tu Aplicación Web?
        </h3>

        <p className="mb-6">Contáctanos y pide tu cotización.</p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
        >
          Solicita una cotización
        </Link>
      </section>
    </main>
  );
};
