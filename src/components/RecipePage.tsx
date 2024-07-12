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
      <article className="p-4 border bg-white shadow-md">
         <figure>
            <Image
               src={`/pictures/${image}`}
               alt={name}
               width={500}
               height={300}
               className="custom-picture object-cover rounded-lg mb-2"
               priority
            />
            <figcaption className="text-lg font-semibold mb-2">
               {name}
            </figcaption>
         </figure>
         <p className="mb-2 text-black">
            <strong>Description:</strong> {description}
         </p>
         <p className="mb-2 text-black">
            <strong>Time:</strong> {time} minutes
         </p>
         <p className="mb-2 text-black">
            <strong>Servings:</strong> {servings}
         </p>
         <h4 className="text-lg mb-1 text-black">Ingredients:</h4>
         <ul className="mb-2 list-disc list-inside text-black">
            {ingredients.map((ingredient, index) => (
               <li key={index}>
                  {ingredient.quantity ? `${ingredient.quantity} ` : ""}
                  {ingredient.unit ? `${ingredient.unit} ` : ""}
                  {ingredient.ingredient}
               </li>
            ))}
         </ul>
         <p className="mb-2 text-black">
            <strong>Appliance:</strong> {appliance}
         </p>
         <p className="mb-2 text-black">
            <strong>Ustensils:</strong> {ustensils.join(", ")}
         </p>
      </article>
   );
};

export default RecipePage;
