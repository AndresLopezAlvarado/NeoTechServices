import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useGetUsersQuery, useUpdateRoleMutation } from "./usersEndpoints";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Users = () => {
  const token = useSelector(selectToken);
  const {
    data: users,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetUsersQuery(undefined, { skip: !token });

  const [userInfo, setUserInfo] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [updateRole, { isLoading: isUpdatingRole }] = useUpdateRoleMutation();

  const onCloseModal = async () => {
    if (selectedRole !== userInfo.role) {
      try {
        await toast.promise(
          updateRole({
            userId: userInfo._id,
            role: selectedRole,
          }).unwrap(),
          {
            loading: "Saving...",
            success: <b>{`Usuario ${userInfo.name} ha sido actualizado`}</b>,
            error: <b>No se pudo actualizar el rol.</b>,
          }
        );
      } catch (error) {
        console.error("Error al actualizar rol del usuario:", error);
      }
    }

    setUserInfo(null);
    setSelectedRole("");
  };

  if (isLoading || isFetching) return <p>Cargando usuarios...</p>;

  if (error) return <p>Error al cargar usuarios</p>;

  if (isSuccess && (!users || users.length === 0))
    return <p>No hay usuarios para mostrar.</p>;

  if (isSuccess)
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Usuarios</h2>

        <ul className="list bg-base-100 rounded-box shadow-md">
          {users.map((user, index) => (
            <li key={user._id} className="list-row">
              {/* Item N° */}
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Picture */}
              <div>
                <img
                  className="size-10 rounded-box"
                  src={user.picture.secure_url || "/noProfilePhoto.png"}
                  alt={user.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/noProfilePhoto.png";
                  }}
                />
              </div>

              {/* Name - Nickname */}
              <div className="list-col-grow">
                <div className="uppercase">{user.nickname}</div>

                <div className="text-xs font-semibold opacity-60">
                  {user.email}
                </div>
              </div>

              {/* Modal Button*/}
              <label
                htmlFor="userInfo"
                className="btn btn-square btn-ghost"
                onClick={() => {
                  setUserInfo(user);
                  setSelectedRole(user.role);
                }}
              >
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </label>
            </li>
          ))}
        </ul>

        {/* Modal Toggle*/}
        <input type="checkbox" id="userInfo" className="modal-toggle" />

        {/* Modal */}
        <div className="modal" role="dialog">
          <div className="modal-box space-y-4">
            <h3 className="text-2xl font-bold text-center">{userInfo?.name}</h3>

            {/* Avatar */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-48 rounded-full">
                  <img
                    alt="picture"
                    src={userInfo?.picture.secure_url || "/noProfilePhoto.png"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/noProfilePhoto.png";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col items-center">
              <div className="w-2/3">
                {/* Nickname */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Nickname:</legend>

                  <span className="px-4 py-3 text-xs">
                    {userInfo?.nickname}
                  </span>
                </fieldset>

                {/* Email */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Email:</legend>

                  <span className="px-4 py-3 text-xs">{userInfo?.email}</span>
                </fieldset>

                {/* Role */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Role:</legend>

                  <select
                    value={selectedRole === "admin" ? "Administrator" : "User"}
                    onChange={(e) => {
                      if (e.target.value === "Administrator")
                        setSelectedRole("admin");
                      else setSelectedRole("user");
                    }}
                    className="select select-sm select-ghost"
                  >
                    <option>Administrator</option>
                    <option>User</option>
                  </select>

                  <span className="label">Change the user's role</span>
                </fieldset>
              </div>
            </div>

            {/* Button */}
            <div className="modal-action">
              <label
                htmlFor="userInfo"
                className={`btn ${
                  selectedRole !== userInfo?.role ? "btn-accent" : "btn-primary"
                }`}
                onClick={onCloseModal}
              >
                {isUpdatingRole
                  ? "Guardando..."
                  : selectedRole !== userInfo?.role
                  ? "Guardar"
                  : "Cerrar"}
              </label>
            </div>
          </div>
        </div>

        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    );

  return null;
};
