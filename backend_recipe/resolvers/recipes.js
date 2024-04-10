const RecipesModel = require("../models/recipes.model");


module.exports = {
    recipes: async (args) => {
        try {
            let recipesList;
            if (args.page) {
                recipesList = await args.filter && args.filter != undefined ? await RecipesModel.find(args.filter) : await RecipesModel.find().limit(parseInt(args.page.limit))
                    .skip(parseInt(args.page.offset));
            } else {
                recipesList = args.filter && args.filter != undefined ? await RecipesModel.find(args.filter) : await RecipesModel.find();
            }
            return recipesList;
        } catch (err) {
            throw err

        }
    },

    createRecipe: async (args, req) => {
        console.log("CREATE REQUESTED");
        try {
            const newRecipe = new RecipesModel({
                name: args.recipeInput.name,
                ingredients: args.recipeInput.ingredients,
                instructions: args.recipeInput.instructions,
                prepTimeMinutes: args.recipeInput.prepTimeMinutes,
                cookTimeMinutes: args.recipeInput.cookTimeMinutes,
                difficulty: args.recipeInput.difficulty,
                cuisine: args.recipeInput.cuisine,
                caloriesPerServing: args.recipeInput.caloriesPerServing,
                tags: args.recipeInput.tags,
                userId: args.recipeInput.userId,
                image: args.recipeInput.image,
                rating: args.recipeInput.rating,
                servings: args.recipeInput.servings,
                mealType: args.recipeInput.mealType
            });

            let createdRecipe = await newRecipe.save();
            return createdRecipe;
        } catch (err) {
            throw err
        }
    }
}