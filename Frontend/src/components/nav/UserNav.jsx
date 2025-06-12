import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";

export const UserNav = ({ picture }) => {
  const { logout } = useAuth0();

  return (
    <>
      {/* Dropdown Menu */}
      <div className="navbar-start">
        <div className="dropdown">
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
        <Link to="/dashboard" className="btn btn-ghost text-xl">
          <img
            className="h-6 w-6 rounded-sm"
            src="/neoTechServicesLogo.png"
            alt="Logo"
          />
          NeoTech Services
        </Link>
      </div>

      {/* Notifications - Avatar */}
      <div className="navbar-end">
        {/* Notifications */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="badge badge-xs badge-primary indicator-item">
              1
            </span>
          </div>
        </button>

        {/* Avatar */}
        <div className="dropdown dropdown-end">
          {/* Button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="picture"
                src={picture || "/noProfilePhoto.png"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/noProfilePhoto.png";
                }}
              />
            </div>
          </div>

          {/* Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content shadow-md bg-white/10 backdrop-blur rounded-box z-1 mt-3 w-52 p-2"
          >
            <li>
              <Link to="/profile">Perfil</Link>
            </li>

            <li>
              <Link to="/settings">Configuraciones</Link>
            </li>

            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
