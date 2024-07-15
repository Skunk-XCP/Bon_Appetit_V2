import recipesData from "@/data/recipes.json";
// Importe des utilitaires de métadonnées de Next.js pour configurer des données adaptées au référencement SEO.
import { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipePage from "../../../components/RecipePage";

// Définis un type TypeScript pour les ingrédients, avec quantité et unité optionnelles.
type Ingredient = {
   ingredient: string;
   quantity?: number;
   unit?: string;
};

// Définis un type TypeScript pour une recette.
type RecipeType = {
   id: number;
   image: string;
   name: string;
   servings: number;
   ingredients: Ingredient[];
   time: number;
   description: string;
   appliance: string;
   ustensils: string[];
};

// Définis le type TypeScript pour les propriétés attendues par les composants de la page,
// spécifiquement incluant les paramètres de route.
type Props = {
   params: {
      id: string;
   };
};

// Fonction asynchrone pour générer des chemins statiques pour la génération statique de Next.js.
export async function generateStaticPaths() {
   const paths = (recipesData as { recipes: RecipeType[] }).recipes.map(
      (recipe) => ({
         id: recipe.id.toString(),
      })
   );
   return paths;
}

// Fonction asynchrone pour générer des métadonnées pour le référencement SEO,
// utilisant l'identifiant de recette passé via l'URL de la page.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
   // Trouve la recette qui correspond à l'identifiant donné.
   const recipe = (recipesData as { recipes: RecipeType[] }).recipes.find(
      (recipe) => recipe.id.toString() === params.id
   );

   // Retourne des métadonnées pour le SEO ou un titre par défaut si la recette n'est pas trouvée.
   if (!recipe) {
      return {
         title: "Recette non trouvée",
      };
   }

   return {
      title: recipe.name,
      description: recipe.description,
   };
}

// Fonction asynchrone qui gère le rendu du composant RecipePage.
const RecipeRoute = async ({ params }: Props) => {
   const recipe = (recipesData as { recipes: RecipeType[] }).recipes.find(
      (recipe) => recipe.id.toString() === params.id
   );

   if (!recipe) {
      notFound();
   }

   return <RecipePage {...recipe} />;
};

export default RecipeRoute;
