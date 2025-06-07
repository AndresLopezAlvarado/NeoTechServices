import { useSelector } from "react-redux";
import { selectUserRole, selectUser } from "../features/auth/authSlice";
import { Link } from "react-router";
import {
  FaLaptopCode,
  FaTools,
  FaShoppingCart,
  FaUserTie,
  FaUsersCog,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

const adminServices = [
  {
    title: "Usuarios",
    description: "Gestiona los perfiles de usuario y roles asignados.",
    icon: <FaUsersCog className="text-4xl text-blue-600" />,
    to: "users",
  },
  {
    title: "Órdenes de Servicio",
    description: "Administra solicitudes técnicas y su estado.",
    icon: <FaClipboardList className="text-4xl text-blue-600" />,
    to: "order",
  },
  {
    title: "Reportes",
    description: "Revisa el rendimiento y estadísticas del sistema.",
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    to: "report",
  },
];

const userServices = [
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

export const Dashboard = () => {
  const role = useSelector(selectUserRole);
  const user = useSelector(selectUser);

  return (
    <>
      {role === "admin" ? (
        <main className="h-full">
          <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bienvenido, {user?.name}
              </h1>

              <p className="text-lg mb-6">
                Panel de administración del sistema.
              </p>

              <img
                className="w-24 h-24 rounded-full mx-auto border-4 border-white"
                src={user?.picture}
                alt={user?.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/noProfilePhoto.png";
                }}
              />
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">
                Gestión Administrativa
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {adminServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.to}
                    className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <div className="mb-4">{service.icon}</div>

                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold">28</h3>

              <p>Usuarios Registrados</p>
            </div>

            <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold">12</h3>

              <p>Órdenes Activas</p>
            </div>

            <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold">4</h3>

              <p>Reportes Pendientes</p>
            </div>
          </section>

          <section className="py-16 px-6 bg-blue-600 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Necesitas soporte como administrador?
            </h3>

            <Link
              to="/contact"
              className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
            >
              Contáctanos
            </Link>
          </section>
        </main>
      ) : (
        <main className="h-full">
          <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bienvenido, {user?.name}
              </h1>

              <p className="text-lg mb-6">Gracias por confiar en nosotros.</p>

              <img
                className="w-24 h-24 rounded-full mx-auto border-4 border-white"
                src={user?.picture}
                alt={user?.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/noProfilePhoto.png";
                  // e.target.style.display = "none";
                }}
              />
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Tus Servicios</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {userServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.to}
                    className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <div className="mb-4">{service.icon}</div>

                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 bg-blue-600 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Necesitas ayuda adicional?
            </h3>

            <p className="mb-6">
              Contáctanos para resolver cualquier duda o solicitar soporte.
            </p>

            <Link
              to="/contact"
              className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
            >
              Contáctanos
            </Link>
          </section>
        </main>
      )}
    </>
  );
};
