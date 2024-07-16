import Image from "next/image";
import React from "react";

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
   ingredients: Ingredient[] | string;
   time: number;
   description: string;
   appliance: string;
   ustensils: string[] | string;
};

const RecipePage: React.FC<RecipeProps> = ({
   image,
   title,
   servings,
   ingredients,
   time,
   description,
   appliance,
   ustensils,
}) => {
   const ustensilsArray: string[] =
      typeof ustensils === "string" ? JSON.parse(ustensils) : ustensils;
   const ingredientsArray: Ingredient[] =
      typeof ingredients === "string" ? JSON.parse(ingredients) : ingredients;
   return (
      <article className="p-8 border border-none shadow-none">
         <div className="flex justify-evenly items-end">
            <div className="bg-lightBlue rounded-lg p-4 mb-12">
               <dt className="text-lg mb-1 text-black">
                  <strong>Appareils:</strong>
               </dt>
               <dd className="list-disc list-inside text-black ml-6 mb-4">
                  {appliance}
               </dd>
               <dt className="text-lg mb-1 text-black">
                  <strong>Ustensiles:</strong>
               </dt>
               <dd>
                  <ul className="list-disc list-inside text-black ml-6">
                     {ustensilsArray.map((ustensil, index) => (
                        <li key={index}>{ustensil}</li>
                     ))}
                  </ul>
               </dd>
            </div>

            <figure className="mx-8">
               <Image
                  src={`/pictures/${image}`}
                  alt={`Image de la recette ${title}`}
                  width={500}
                  height={300}
                  className="rounded-lg mb-2"
                  priority
               />
               <figcaption className="text-lg font-semibold">
                  <h2 className="text-2xl text-center mb-2">{title}</h2>
               </figcaption>
            </figure>

            <div className="bg-lightBlue rounded-lg p-4 mb-12">
               <p className="text-sm mb-2">
                  <strong>Portions:</strong> {servings}
               </p>
               <dt className="text-lg mb-1 text-black">
                  <strong>Ingrédients:</strong>
               </dt>
               <dd>
                  <ul className="list-disc list-inside text-black ml-6">
                     {ingredientsArray.map((ingredient, index) => (
                        <li key={index}>
                           {ingredient.quantity
                              ? `${ingredient.quantity} `
                              : ""}
                           {ingredient.unit ? `${ingredient.unit} ` : ""}
                           {ingredient.ingredient}
                        </li>
                     ))}
                  </ul>
               </dd>
            </div>
         </div>

         <div>
            <div className="text-lg mb-4 mt-10">
               <p className="recipe-time text-sm">
                  <strong>Temps:</strong> {time} minutes
               </p>
            </div>
            <div className="bg-ivory rounded-lg p-4 recipe-description">
               <p className="mb-4">
                  <strong>Description:</strong>
               </p>
               <p className="ml-6">{description}</p>
            </div>
         </div>
      </article>
   );
};

export default RecipePage;
