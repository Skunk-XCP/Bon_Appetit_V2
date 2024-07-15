"use client";

import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";
// import recipesData from "@/data/recipes.json";
// import { PrismaClient } from '@prisma/client';

type Ingredient = {
   ingredient: string;
   quantity?: number;
   unit?: string;
};

type RecipeType = {
   id: number;
   image: string;
   name: string;
   author: string;
   servings: number;
   ingredients: Ingredient[];
   time: number;
   description: string;
   appliance: string;
   ustensils: string[];
};

export default function Home() {
   const [recipes, setRecipes] = useState<RecipeType[]>([]);

   useEffect(() => {
      async function fetchRecipes() {
         const res = await fetch("/api/recipes");
         const data = await res.json();
         setRecipes(data);
      }

      fetchRecipes();
   }, []);

   return (
      <main className="items-center bg-ivory">
         <ul className="card-list">
            {recipes.map((recipe) => (
               <li key={recipe.id}>
                  <RecipeCard {...recipe} />
               </li>
            ))}
         </ul>
      </main>
   );
}
