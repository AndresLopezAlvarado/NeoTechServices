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
    title: "Users",
    description: "Manage user profiles and assigned roles.",
    icon: <FaUsersCog className="text-4xl text-blue-600" />,
    to: "/users",
  },
  {
    title: "Service Orders",
    description: "Manage technical requests and their status.",
    icon: <FaClipboardList className="text-4xl text-blue-600" />,
    to: "/order",
  },
  {
    title: "Reports",
    description: "Check system performance and statistics.",
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    to: "/report",
  },
];

const userServices = [
  {
    title: "Consultancies",
    description:
      "Receive professional support in technology, systems, and digital productivity.",
    icon: <FaUserTie className="text-4xl text-blue-600" />,
    to: "/consultancies",
  },
  {
    title: "Technical Service",
    description:
      "Diagnostics, repair, and maintenance of equipment with warranty.",
    icon: <FaTools className="text-4xl text-blue-600" />,
    to: "/technicalService",
  },
  {
    title: "Web Apps",
    description:
      "We develop customized digital solutions for your business or project.",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    to: "/webApps",
  },
  {
    title: "Equipment Sale",
    description:
      "Buy reliable technological equipment and tools at a good price.",
    icon: <FaShoppingCart className="text-4xl text-blue-600" />,
    to: "/equipmentSale",
  },
];

export const Dashboard = () => {
  const role = useSelector(selectUserRole);
  const stateUser = useSelector(selectUser);

  return (
    <>
      {role === "admin" ? (
        // Admin
        <main className="h-full">
          {/* Hero */}
          <section className="hero bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="hero-content flex-col lg:flex-row">
              <img
                alt="picture"
                src={stateUser.picture.secure_url}
                className="h-40 lg:h-52 max-w-sm rounded-full shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/noProfilePhoto.png";
                }}
              />

              <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center">
                  Welcome, {stateUser?.name}
                </h1>

                <p className="py-6">System Administration Panel</p>

                <Link to="/profile" className="btn btn-primary">
                  Go to profile
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">
                Administrative Management
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

              <p>Registered Users</p>
            </div>

            <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold">12</h3>

              <p>Active Orders</p>
            </div>

            <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold">4</h3>

              <p>Pending Reports</p>
            </div>
          </section>

          <section className="py-16 px-6 bg-blue-600 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Need support as an administrator?
            </h3>

            <Link
              to="/contact"
              className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
            >
              Contact us
            </Link>
          </section>
        </main>
      ) : (
        // User
        <main className="h-full">
          {/* Hero */}
          <section className="hero bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="hero-content flex-col lg:flex-row">
              <img
                alt="picture"
                src={stateUser.picture.secure_url}
                className="h-40 lg:h-52 max-w-sm rounded-full shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/noProfilePhoto.png";
                }}
              />

              <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold break-words whitespace-normal">
                  Welcome, {stateUser?.name}
                </h1>

                <p className="py-6">Thank you for trusting us!</p>

                <Link to="/profile" className="btn btn-primary">
                  Go to profile
                </Link>
              </div>
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
              Do you need additional help?
            </h3>

            <p className="mb-6">
              Contact us to resolve any questions or request support.
            </p>

            <Link
              to="/contact"
              className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-600 font-semibold rounded-full shadow transition"
            >
              Contact us
            </Link>
          </section>
        </main>
      )}
    </>
  );
};
