declare module "multer-storage-cloudinary" {
   import { StorageEngine } from "multer";

   interface CloudinaryStorageOptions {
      cloudinary: any;
      params: {
         folder: string;
         format?: string | (() => string);
         public_id?: string | ((req: any, file: any) => string);
      };
   }

   export default class CloudinaryStorage implements StorageEngine {
      constructor(options: CloudinaryStorageOptions);
      _handleFile(req: any, file: any, cb: any): void;
      _removeFile(req: any, file: any, cb: any): void;
   }
}

declare module "next-connect" {
   import { NextApiRequest, NextApiResponse } from "next";

   type Middleware<TReq = NextApiRequest, TRes = NextApiResponse> = (
      req: TReq,
      res: TRes,
      next: (err?: any) => void
   ) => void;

   interface Options<TReq = NextApiRequest, TRes = NextApiResponse> {
      onError?: (
         err: any,
         req: TReq,
         res: TRes,
         next: (err?: any) => void
      ) => void;
      onNoMatch?: (req: TReq, res: TRes) => void;
   }

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

   const nextConnect: NextConnect;
   export default nextConnect;
}
