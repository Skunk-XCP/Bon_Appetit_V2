import Image from "next/image";
import Link from "next/link";
import React from "react";

type RecipeProps = {
   id: number;
   image: string;
   title: string;
   author: string;
   time: number;
};

const RecipeCard: React.FC<RecipeProps> = ({
   id,
   image,
   title,
   author,
   time,
}) => {
   return (
      <Link href={`/recipes/${id}`} passHref legacyBehavior>
         <article className="custom-card mb-4 p-4 border rounded-lg bg-white shadow-md relative cursor-pointer">
            <figure>
               <Image
                  src={`/pictures/${image}`}
                  alt={`Image de la recette ${title}`}
                  width={500}
                  height={300}
                  className="custom-picture object-cover rounded-lg mb-2"
                  priority
               />
               <figcaption className="text-lg text-black font-semibold mb-2">
                  <span className="text-black absolute top-5 right-5 bg-yellow-200 rounded-xl w-16 text-center text-sm">
                     {time} min
                  </span>
                  <h2 className="ellipsis">{title}</h2>
                  <p className="mb-2 text-black">{author}</p>
               </figcaption>
            </figure>
         </article>
      </Link>
   );
};

export default RecipeCard;
