import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../features/auth/authSlice.js";
import { useUpdateProfileMutation } from "../features/api/authApi.js";
import { useEffect, useState } from "react";
import { CLOUD_NAME, UPLOAD_PRESET } from "../../config.js";
import toast, { Toaster } from "react-hot-toast";

export const Profile = () => {
  const dispatch = useDispatch();
  const stateUser = useSelector(selectUser);
  const [updateProfile] = useUpdateProfileMutation();
  const [newName, setNewName] = useState(stateUser.name);
  const [newPicture, setNewPicture] = useState(null);
  const hasChanges = newName && (newName !== stateUser.name || newPicture);

  useEffect(() => {
    setNewName(stateUser.name);
    setNewPicture(null);
  }, [stateUser]);

  const infoMessage = () => {
    if (!newName.trim()) return "¡Name cannot be empty!";
    if (newName === stateUser.name && !newPicture)
      return "You can edit your name";
    return "Click 'Save' to apply the changes.";
  };

  const handlePictureChange = (e) => {
    const picture = e.target.files[0];
    if (picture) setNewPicture(picture);
  };

  const handleNameChange = (e) => setNewName(e.target.value);

  const uploadToCloudinary = async (newPicture) => {
    const formData = new FormData();
    formData.append("file", newPicture);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", "profilePictures");
    formData.append("public_id", `${Date.now()}`);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );

      const data = await response.json();
      return { secure_url: data.secure_url, public_id: data.public_id };
    } catch (error) {
      console.error("Cloudinary upload error:", error);
    }
  };

  const onUpdateProfile = async () => {
    let picture = stateUser.picture;

    if (newPicture) {
      try {
        picture = await toast.promise(uploadToCloudinary(newPicture), {
          loading: "Guardando...",
          success: <b>Imagen subida correctamente.</b>,
          error: <b>Error al subir la imagen.</b>,
        });
      } catch (error) {
        console.error("Error al subir imagen:", error);
      }
    }

    try {
      const { data } = await toast.promise(
        updateProfile({ newName, newPicture: picture }),
        {
          loading: "Guardando...",
          success: <b>Nombre actualizado.</b>,
          error: <b>Error al actualizar el perfil.</b>,
        }
      );

      dispatch(setUser(data));
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  return (
    stateUser && (
      <main className="p-4 flex justify-center">
        <div className="w-fit max-w-4xl flex flex-col lg:flex-row rounded-lg shadow-md">
          {/* Picture */}
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <label htmlFor="fileUpload" className="cursor-pointer">
              <img
                alt="picture"
                className="object-cover rounded-lg h-80 w-full lg:w-96 max-h-96"
                src={stateUser.picture.secure_url || "/noProfilePhoto.png"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/noProfilePhoto.png";
                }}
              />
            </label>

            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePictureChange}
            />
          </div>

          {/* Info */}
          <div className="flex-1 p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name:
              </label>

              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
                placeholder="Type your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">{infoMessage()}</p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>

              <p className="text-gray-800">{stateUser.email}</p>
            </div>

            {/* Button */}
            {hasChanges && (
              <div className="pt-2 text-right">
                <button
                  className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition cursor-pointer"
                  onClick={onUpdateProfile}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>

        <Toaster position="bottom-right" reverseOrder={false} />
      </main>
    )
  );
};
