import { Link } from "react-router";
import {
  FaLaptopCode,
  FaTools,
  FaShoppingCart,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Asesorías",
    description:
      "Recibe acompañamiento profesional en tecnología, sistemas y productividad digital.",
    icon: <FaUserTie className="text-4xl text-blue-600" />,
    to: "consultancies",
  },
  {
    title: "Servicio Técnico",
    description:
      "Diagnóstico, reparación y mantenimiento de equipos con garantía.",
    icon: <FaTools className="text-4xl text-blue-600" />,
    to: "technicalService",
  },
  {
    title: "Aplicaciones Web",
    description:
      "Desarrollamos soluciones digitales personalizadas para tu negocio o proyecto.",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    to: "webApps",
  },
  {
    title: "Venta de Equipos",
    description:
      "Compra equipos y herramientas tecnológicas confiables a buen precio.",
    icon: <FaShoppingCart className="text-4xl text-blue-600" />,
    to: "equipmentSale",
  },
];

export const Home = () => {
  return (
    <main className="h-full">
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Impulsando tu mundo digital
          </h1>

          <p className="text-lg mb-8">
            Desarrollamos, asesoramos, reparamos y vendemos para que tu
            tecnología funcione al 100%.
          </p>

          <Link
            to="/portfolio"
            className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
          >
            Ir al Portafolio
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nuestros Servicios</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.to}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                <p className="text-sm text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">
          ¿Listo para optimizar tu mundo digital?
        </h3>

        <p className="mb-6">
          Contáctanos y recibe una asesoría inicial sin costo.
        </p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
        >
          Contáctanos
        </Link>
      </section>
    </main>
  );
};
