import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Créer une instance de PrismaClient pour interagir avec la base de données
const prisma = new PrismaClient();

// Exporter la fonction handler comme gestionnaire par défaut pour cette route API
export default async function handler(
   _req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      // Utiliser Prisma pour trouver toutes les recettes dans la base de données
      const recipes = await prisma.recipe.findMany();
      // Renvoyer les recettes trouvées avec un statut 200 (OK)
      res.status(200).json(recipes);
   } catch (error) {
      // En cas d'erreur, renvoyer un statut 500 (Internal Server Error) avec le message d'erreur
      res.status(500).json({
         error: "Erreur lors de la récupération des recettes.",
      });
   }
}
