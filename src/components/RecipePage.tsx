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
   name: string;
   servings: number;
   ingredients: Ingredient[];
   time: number;
   description: string;
   appliance: string;
   ustensils: string[];
};

const RecipePage: React.FC<RecipeProps> = ({
   image,
   name,
   servings,
   ingredients,
   time,
   description,
   appliance,
   ustensils,
}) => {
   return (
      <article className="p-8 border border-none shadow-none">
         <div className="flex justify-evenly items-end">
            <div className="bg-lightBlue rounded-lg p-4 mb-12">
               <dt className="text-lg mb-1 text-black">
                  <strong>Ustensils:</strong>
               </dt>
               <dd className="list-disc list-inside text-black ml-6">
                  {ustensils.join(", ")}
               </dd>
            </div>

            <figure className="mx-8">
               <Image
                  src={`/pictures/${image}`}
                  alt={name}
                  width={500}
                  height={300}
                  className="rounded-lg mb-2"
                  priority
               />
               <figcaption className="text-lg font-semibold">
                  <h2 className="text-2xl text-center mb-2">{name}</h2>
               </figcaption>
            </figure>

            <div className="bg-lightBlue rounded-lg p-4 mb-12">
               <p className="text-sm mb-2">
                  <strong>Servings:</strong> {servings}
               </p>
               <dt className="text-lg mb-1 text-black">
                  <strong>Ingredients:</strong>
               </dt>
               <dd>
                  <ul className="list-disc list-inside text-black ml-6">
                     {ingredients.map((ingredient, index) => (
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
            <div className="flex justify-center text-lg mb-10">
               <p className="text-sm">
                  <strong>Time:</strong> {time} minutes
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
