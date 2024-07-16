import upload from "@/utils/multer";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

// Créer une instance de nextConnect avec des types NextApiRequest et NextApiResponse
const apiRoute = nextConnect({
   onError: (error, req: NextApiRequest, res: NextApiResponse) => {
      res.status(501).json({ error: `Something went wrong! ${error.message}` });
   },
   onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
   },
});

// Utiliser multer pour traiter les fichiers téléchargés
apiRoute.use((req: any, res: any, next: any) => {
   upload.single("file")(req, res, next);
});

// Gestionnaire POST pour renvoyer l'URL de l'image téléchargée
apiRoute.post((req: any, res: NextApiResponse) => {
   res.status(200).json({ url: (req as any).file.path });
});

// Désactiver le bodyParser pour cette route
export const config = {
   api: {
      bodyParser: false,
   },
};

// Exporter la route
export default apiRoute;
