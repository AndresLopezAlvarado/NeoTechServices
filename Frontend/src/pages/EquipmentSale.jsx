import { Link } from "react-router";

export const EquipmentSale = () => {
  return (
    <main className="h-full">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Venta de Equipos Tecnológicos y Herramientas
          </h1>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
          >
            Cotiza tu producto
          </Link>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="mb-6 text-gray-700 text-lg text-justify">
            Comercializamos equipos tecnológicos, herramientas para técnicos,
            accesorios y más. Garantizamos calidad, soporte y asesoría en la
            elección del producto ideal para tus necesidades.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Computadores de escritorio y portátiles (nuevos y usados).</li>
            <li>Herramientas especializadas para técnicos y makers.</li>
            <li>Accesorios: memorias, discos, fuentes, periféricos.</li>
            <li>Monitores, impresoras, routers, UPS y más.</li>
            <li>Asesoría personalizada según tu necesidad.</li>
            <li>Garantía y servicio postventa confiable.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">
          ¿Buscas un equipo confiable y con respaldo?
        </h3>

        <p className="mb-6">
          Te ayudamos a elegir lo mejor para ti o tu negocio.
        </p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
        >
          Cotiza tu producto
        </Link>
      </section>
    </main>
  );
};
