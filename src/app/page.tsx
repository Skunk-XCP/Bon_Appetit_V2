import RecipeCard from "@/components/RecipeCard";
import recipesData from "@/data/recipes.json";

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

const typedRecipesData: RecipeType[] = recipesData.recipes as RecipeType[];

export default function Home() {
   return (
      <main className="items-center bg-ivory">
         <h1 className="bg-red-500 text-4xl text-center ">
            Welcome to My Recipe App
         </h1>
         <ul className="card-list">
            {typedRecipesData.map((recipe) => (
               <li key={recipe.id}>
                  <RecipeCard {...recipe} />
               </li>
            ))}
         </ul>
      </main>
   );
}
