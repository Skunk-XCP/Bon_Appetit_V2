import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import CloudinaryStorage from "multer-storage-cloudinary";

// Configurer Cloudinary avec les variables d'environnement
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Créer une instance de stockage Cloudinary pour multer
const storage = new CloudinaryStorage({
   // Instance de Cloudinary
   cloudinary: cloudinary,
   // Paramètres de stockage
   params: {
      folder: "recipes",
      format: () => "png",
      // Définir l'ID public du fichier comme le nom d'origine du fichier sans l'extension
      public_id: (_req, file) => file.originalname.split(".")[0],
   },
});

// Configurer multer avec le stockage Cloudinary
const upload = multer({ storage });

export default upload;
