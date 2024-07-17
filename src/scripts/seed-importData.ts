const { PrismaClient } = require("@prisma/client");
const recipesData = require("../data/recipes.json");

const prisma = new PrismaClient();

async function main() {
   for (const recipe of recipesData.recipes) {
      await prisma.recipe.create({
         data: {
            title: recipe.name,
            description: recipe.description,
            ingredients: JSON.stringify(recipe.ingredients),
            appliance: recipe.appliance,
            ustensils: JSON.stringify(recipe.ustensils),
            time: recipe.time,
            servings: recipe.servings,
            image: recipe.image,
            user: {
               connectOrCreate: {
                  where: { id: 1 }, // En supposant un ID utilisateur par défaut pour l'instant
                  create: {
                     email: "default@example.com",
                     password: "default_password", // Hasher le password
                  },
               },
            },
         },
      });
   }
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
