// src/pages/api/recipe.ts
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const { id } = req.query;

   if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Invalid ID" });
   }

   const recipeId = parseInt(id as string, 10);

   if (isNaN(recipeId)) {
      return res.status(400).json({ error: "Invalid ID" });
   }

   const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
   });

   if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
   }

   res.status(200).json(recipe);
}
