import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";

export const GuestNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {/* Dropdown Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Button */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          {/* Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content shadow-md bg-white/10 backdrop-blur rounded-box z-1 mt-3 w-52 p-2"
          >
            <li>
              <Link to={"/consultancies"}>Asesorías</Link>
            </li>

            <li>
              <Link to={"/technicalService"}>Servicio Técnico</Link>
            </li>

            <li>
              <Link to={"/webApps"}>Aplicaciones Web</Link>
            </li>

            <li>
              <Link to={"/equipmentSale"}>Venta de Equipos</Link>
            </li>

            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            className="h-6 w-6 rounded-sm"
            src="/neoTechServicesLogo.png"
            alt="Logo"
          />
          NeoTech Services
        </Link>
      </div>

      {/* Login */}
      <div className="navbar-end">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    </>
  );
};
