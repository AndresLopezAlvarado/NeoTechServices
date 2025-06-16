import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../auth/authSlice.js";
import {
  useUpdatePictureMutation,
  useUpdateProfileMutation,
} from "./profileEndpoints.js";
import { useEffect, useState } from "react";
import { CLOUD_NAME, UPLOAD_PRESET } from "../../../config.js";
import toast, { Toaster } from "react-hot-toast";

const uploadToCloudinary = async (newPicture) => {
  if (!newPicture) return null;

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

export const Profile = () => {
  const dispatch = useDispatch();
  const stateUser = useSelector(selectUser);
  const [updatePicture] = useUpdatePictureMutation();
  const [updateProfile, { isLoading: isUpdatingProfile }] =
    useUpdateProfileMutation();
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (stateUser?.name) setNewName(stateUser.name);
  }, [stateUser]);

  const handlePictureChange = async (e) => {
    const newPicture = e.target.files[0];
    if (!newPicture) return;
    console.log(newPicture);

    try {
      const uploadedPicture = await uploadToCloudinary(newPicture);
      if (!uploadedPicture) return;
      console.log(uploadedPicture);

      const { data } = await toast.promise(
        updatePicture({ newPicture: uploadedPicture }),
        {
          loading: "Uploading picture...",
          success: <b>Picture uploaded successfully.</b>,
          error: <b>Error uploading picture.</b>,
        }
      );

      console.log(data);

      dispatch(setUser(data));
    } catch (error) {
      console.error("Error uploading picture:", error);
    }
  };

  const handleNameChange = (e) => setNewName(e.target.value);

  const infoMessage = () => {
    if (!newName.trim()) return "¡Name cannot be empty!";
    if (newName !== stateUser.name) return "Click 'Save' to apply the changes.";
    return "You can edit your name";
  };

  const onUpdateProfile = async () => {
    try {
      const { data } = await toast.promise(updateProfile({ newName }), {
        loading: "Updating profile...",
        success: <b>Profile updated successfully.</b>,
        error: <b>Error updating profile.</b>,
      });

      dispatch(setUser(data));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    stateUser && (
      <main className="p-4 flex justify-center">
        <div className="w-80 lg:w-3/4 flex flex-col lg:flex-row rounded-lg shadow-lg">
          {/* Picture */}
          <div className="w-full lg:w-96 p-3 flex items-center justify-center">
            <label
              htmlFor="fileUpload"
              className="w-full rounded-lg cursor-pointer"
            >
              <img
                alt="picture"
                className="w-full border border-blue-300 hover:border-2 hover:border-blue-600 object-cover rounded-lg transition"
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
                className="w-full px-4 py-2 text-gray-800 border border-blue-300 rounded-md focus:ring focus:ring-blue-600 focus:outline-none"
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
            {newName.trim() !== "" && newName !== stateUser.name && (
              <div className="pt-2 text-right">
                <button
                  className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition cursor-pointer"
                  onClick={onUpdateProfile}
                >
                  {isUpdatingProfile ? (
                    <span className="loading loading-ring loading-xl"></span>
                  ) : (
                    "Save"
                  )}
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
