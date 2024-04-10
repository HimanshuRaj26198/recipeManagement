const buildSchema = require('graphql').buildSchema;

module.exports = buildSchema(`
    type Recipe {
        _id: ID!
        name: String!
        ingredients: [String!]
        instructions: [String!]
        prepTimeMinutes: Int!
        cookTimeMinutes: Int!
        servings: Int!
        difficulty: String!
        cuisine: String!
        caloriesPerServing: Float!
        tags: [String!]
        userId: Int!
        image: String!
        rating: Float!
        mealType: [String!]
    }


    input RecipeInput {
        name: String!
        ingredients: [String!]!
        instructions: [String!]!
        prepTimeMinutes: Int!
        cookTimeMinutes: Int!
        servings: Int!
        difficulty: String!
        cuisine: String!
        caloriesPerServing: Int!
        tags: [String!]!
        userId: Int!
        image: String!
        rating: Float!
        mealType: [String!]!
    }

    input FilterInput {
        _id: String,
        tags: String,
        mealType: String,
        cuisine: String,
        difficulty: String
    }

    input pageIndex {
        limit: Int,
        offset: Int
    }



    type RootQuery {
        recipes(filter: FilterInput, page: pageIndex ): [Recipe!]!
    }

    type RootMutation{
        createRecipe(recipeInput: RecipeInput): Recipe
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)