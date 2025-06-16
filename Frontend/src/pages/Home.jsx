import { Link } from "react-router";
import {
  FaLaptopCode,
  FaTools,
  FaShoppingCart,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Consultancies",
    description:
      "Receive professional support in technology, systems, and digital productivity.",
    icon: <FaUserTie className="text-4xl text-blue-600" />,
    to: "consultancies",
  },
  {
    title: "Technical Service",
    description:
      "Diagnostics, repair, and maintenance of equipment with warranty.",
    icon: <FaTools className="text-4xl text-blue-600" />,
    to: "technicalService",
  },
  {
    title: "Web Apps",
    description:
      "We develop customized digital solutions for your business or project.",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    to: "webApps",
  },
  {
    title: "Equipment Sale",
    description:
      "Buy reliable technological equipment and tools at a good price.",
    icon: <FaShoppingCart className="text-4xl text-blue-600" />,
    to: "equipmentSale",
  },
];

export const Home = () => {
  return (
    <main className="h-full">
      {/* Hero */}
      <section className="hero bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Powering your digital world</h1>

            <p className="py-6">
              We develop, advise, repair, and sell so that your technology works
              at 100%.
            </p>

            <button className="btn btn-primary">Go to Portfolio</button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>

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
          Ready to optimize your digital world?
        </h3>

        <p className="mb-6">
          Contact us and receive a free initial consultation.
        </p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
};
