// Importer multer pour gérer les téléchargements de fichiers
import upload from "@/utils/multer";
import type { NextApiRequest, NextApiResponse } from "next";
// Importer nextConnect pour créer des middlewares pour les API routes
import nextConnect from "next-connect";

// Créer une instance de nextConnect avec des types NextApiRequest et NextApiResponse
const apiRoute = nextConnect({
   // Gestion des erreurs
   onError: (error, _req: NextApiRequest, res: NextApiResponse) => {
      res.status(501).json({ error: `Something went wrong! ${error.message}` });
   },
   // Gestion des méthodes non autorisées
   onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
   },
});

// Utiliser multer pour traiter les fichiers téléchargés
apiRoute.use((req: any, res: any, next: any) => {
   // Utiliser la méthode single de multer pour accepter un fichier unique nommé "file"
   upload.single("file")(req, res, next);
});

// Gestionnaire POST pour renvoyer l'URL de l'image téléchargée
apiRoute.post((req: any, res: NextApiResponse) => {
   res.status(200).json({ url: (req as any).file.path });
});

// Désactiver le bodyParser pour cette route
export const config = {
   api: {
      // Désactiver le bodyParser car multer gère déjà le parsing des fichiers
      bodyParser: false,
   },
};

export default apiRoute;
