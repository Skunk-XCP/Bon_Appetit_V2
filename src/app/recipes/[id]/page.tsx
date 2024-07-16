"use client";

import RecipePage from "@/components/RecipePage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Ingredient = {
   ingredient: string;
   quantity?: number;
   unit?: string;
};

type RecipeProps = {
   id: number;
   image: string;
   title: string;
   servings: number;
   ingredients: Ingredient[];
   time: number;
   description: string;
   appliance: string;
   ustensils: string[];
};

export default function RecipeDetailPage() {
   const params = useParams() as { id: string };
   const { id } = params;
   const [recipe, setRecipe] = useState<RecipeProps | null>(null);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      async function fetchRecipe() {
         try {
            if (id) {
               const res = await fetch(`/api/recipe?id=${id}`);
               if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
               }
               const data = await res.json();
               setRecipe(data);
            }
         } catch (err) {
            if (err instanceof Error) {
               setError(err.message);
            } else {
               setError("An unknown error occurred");
            }
         }
      }

      fetchRecipe();
   }, [id]);

   if (error) {
      return <div>Error: {error}</div>;
   }

   if (!recipe) {
      return <div>Loading...</div>;
   }

   return <RecipePage {...recipe} />;
}
