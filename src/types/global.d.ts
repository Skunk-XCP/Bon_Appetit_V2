// Déclaration du module "multer-storage-cloudinary"
declare module "multer-storage-cloudinary" {
   import { StorageEngine } from "multer";

   // Interface pour les options de stockage Cloudinary
   interface CloudinaryStorageOptions {
      // Instance de Cloudinary
      cloudinary: any;
      // Paramètres de stockage
      params: {
         folder: string;
         format?: string | (() => string);
         public_id?: string | ((req: any, file: any) => string);
      };
   }

   // Déclaration de la classe CloudinaryStorage implémentant StorageEngine de multer
   export default class CloudinaryStorage implements StorageEngine {
      // Constructeur prenant les options de stockage Cloudinary
      constructor(options: CloudinaryStorageOptions);
      // Méthode pour gérer le fichier
      _handleFile(req: any, file: any, cb: any): void;
      // Méthode pour supprimer le fichier
      _removeFile(req: any, file: any, cb: any): void;
   }
}

// Déclaration du module "next-connect"
declare module "next-connect" {
   import { NextApiRequest, NextApiResponse } from "next";

   // Type pour un middleware, prenant la requête, la réponse et une fonction next
   type Middleware<TReq = NextApiRequest, TRes = NextApiResponse> = (
      req: TReq,
      res: TRes,
      next: (err?: any) => void
   ) => void;

   // Interface pour les options de nextConnect
   interface Options<TReq = NextApiRequest, TRes = NextApiResponse> {
      onError?: (
         err: any,
         req: TReq,
         res: TRes,
         next: (err?: any) => void
      ) => void;
      // Gestion des méthodes non autorisées
      onNoMatch?: (req: TReq, res: TRes) => void;
   }

   // Interface pour nextConnect, permettant de chaîner des middlewares et des gestionnaires pour différentes méthodes HTTP
   interface NextConnect<TReq = NextApiRequest, TRes = NextApiResponse> {
      (options?: Options<TReq, TRes>): NextConnect<TReq, TRes>;
      use: (...handlers: Middleware<TReq, TRes>[]) => NextConnect<TReq, TRes>;
      get: (...handlers: Middleware<TReq, TRes>[]) => NextConnect<TReq, TRes>;
      post: (...handlers: Middleware<TReq, TRes>[]) => NextConnect<TReq, TRes>;
      put: (...handlers: Middleware<TReq, TRes>[]) => NextConnect<TReq, TRes>;
      delete: (
         ...handlers: Middleware<TReq, TRes>[]
      ) => NextConnect<TReq, TRes>;
      patch: (...handlers: Middleware<TReq, TRes>[]) => NextConnect<TReq, TRes>;
      options: (
         ...handlers: Middleware<TReq, TRes>[]
      ) => NextConnect<TReq, TRes>;
   }

   // Déclaration de la fonction nextConnect par défaut
   const nextConnect: NextConnect;
   export default nextConnect;
}
