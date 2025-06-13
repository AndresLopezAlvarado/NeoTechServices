import { v2 as cloudinary } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "../../config.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const noProfilePicture =
  "https://res.cloudinary.com/da8bad8xx/image/upload/v1749846976/profilePictures/noProfilePhoto.png";

export const uploadPicture = async (pictureUrl, pictureName) => {
  try {
    if (
      pictureUrl.includes("gravatar.com") ||
      pictureUrl.includes("auth0.com/avatars")
    )
      pictureUrl = noProfilePicture;

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      pictureUrl,
      { public_id: pictureName, folder: "profilePictures", overwrite: true }
    );

    return { secure_url, public_id };
  } catch (error) {
    console.error("Error uploading picture:", error);
    throw new Error("Error uploading picture");
  }
};

export const deletePicture = async (public_id) => {
  try {
    await cloudinary.uploader.destroy(public_id, { invalidate: true });
  } catch (error) {
    console.error("Error deleting picture:", error);
    throw new Error("Error deleting picture");
  }
};

// No borrar!!!!!! Esto crea un upload_preset unsigned
// para alojar fotos en la nube desde el frontend.
// Solo es para usarlo una vez, ya que despues de creado
// se usa directamente desde cloudinary con las keys privadas

// cloudinary.api
//   .create_upload_preset({
//     name: "NTSCloudinary",
//     unsigned: true,
//     use_filename: true,
//     unique_filename: true,
//   })
//   .then(console.log)
//   .catch(console.error);
