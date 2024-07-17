import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Créer une instance de PrismaClient
const prisma = new PrismaClient();

// Exporter la fonction handler comme gestionnaire par défaut pour cette route API
export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   // Extraire l'identifiant depuis les paramètres de requête
   const { id } = req.query;

   // Vérifier si l'identifiant est valide (présent et non sous forme de tableau)
   if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Invalid ID" });
   }

   // Convertir l'identifiant en entier
   const recipeId = parseInt(id as string, 10);

   // Vérifier si la conversion a réussi
   if (isNaN(recipeId)) {
      return res.status(400).json({ error: "Invalid ID" });
   }

   // Chercher la recette dans la base de données en utilisant Prisma
   const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
   });

   // Vérifier si la recette existe
   if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
   }

   // Renvoyer les détails de la recette avec un statut 200 (OK)
   res.status(200).json(recipe);
}
