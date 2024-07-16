import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import CloudinaryStorage from "multer-storage-cloudinary";

// Configurer Cloudinary
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Créer une instance de stockage Cloudinary pour multer
const storage = new CloudinaryStorage({
   cloudinary: cloudinary,
   params: {
      folder: "recipes",
      format: () => "png", // Changement ici
      public_id: (req, file) => file.originalname.split(".")[0],
   },
});

// Configurer multer avec le stockage Cloudinary
const upload = multer({ storage });

export default upload;
