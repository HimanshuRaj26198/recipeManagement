let dataRequestOptions = {
    _id: true,
    name: true,
    ingredients: true,
    instructions: true,
    prepTimeMinutes: true,
    cookTimeMinutes: true,
    servings: true,
    difficulty: true,
    cuisine: true,
    caloriesPerServing: true,
    tags: true,
    userId: true,
    image: true,
    rating: true,
    mealType: true
}
export const fetchAllRecipes = (input, filter = {}, page = { offset: 1 }) => {
    let baseUrl = 'http://localhost:3000/graphql';
    if (input.allInfo) input = dataRequestOptions;
    let requestedBody;
    if (Object.keys(filter).length === 0) {
        requestedBody = {
            query: `
                query{
                    recipes(page: {limit: 10, offset: ${page.offset}}){
                        ${input._id ? '_id' : ''}
                        ${input.name ? 'name' : ''}
                        ${input.ingredients ? 'ingredients' : ''}
                        ${input.prepTimeMinutes ? 'prepTimeMinutes' : ''}
                        ${input.cookTimeMinutes ? 'cookTimeMinutes' : ''}
                        ${input.servings ? 'servings' : ''}
                        ${input.difficulty ? 'difficulty' : ''}
                        ${input.cuisine ? 'cuisine' : ''}
                        ${input.caloriesPerServing ? 'caloriesPerServing' : ''}
                        ${input.tags ? 'tags' : ''}
                        ${input.userId ? 'userId' : ''}
                        ${input.image ? 'image' : ''}
                        ${input.rating ? 'rating' : ''}
                        ${input.mealType ? 'mealType' : ''}
                    }
                }
    
            `
        }
    } else {
        const filterString = JSON.stringify(filter).replace(/"([^"]+)":/g, '$1:');
        console.log(filterString);
        requestedBody = {
            query: `
                query{
                    recipes(filter: ${filterString}, page: {limit: 10, offset: ${page.offset}}){
                        ${input._id ? '_id' : ''}
                        ${input.name ? 'name' : ''}
                        ${input.ingredients ? 'ingredients' : ''}
                        ${input.instructions ? 'instructions' : ''}
                        ${input.prepTimeMinutes ? 'prepTimeMinutes' : ''}
                        ${input.cookTimeMinutes ? 'cookTimeMinutes' : ''}
                        ${input.servings ? 'servings' : ''}
                        ${input.difficulty ? 'difficulty' : ''}
                        ${input.cuisine ? 'cuisine' : ''}
                        ${input.caloriesPerServing ? 'caloriesPerServing' : ''}
                        ${input.tags ? 'tags' : ''}
                        ${input.userId ? 'userId' : ''}
                        ${input.image ? 'image' : ''}
                        ${input.rating ? 'rating' : ''}
                        ${input.mealType ? 'mealType' : ''}
                    }
                }
    
            `
        }
    }
    return new Promise(function (resolve, reject) {
        try {
            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(requestedBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => {
                resolve(data)
            })
        } catch (err) {
            reject(err)
        }
    })
}


export const addRecipe = (obj) => {
    let baseUrl = 'http://localhost:3000/graphql';
    let newObj = {
        name: obj.name,
        ingredients: obj.ingredients,
        instructions: obj.instructions,
        image: obj.image,
        cuisine: obj.cuisine,
        rating: parseFloat(obj.rating),
        prepTimeMinutes: parseInt(obj.prepTimeMinutes),
        cookTimeMinutes: parseInt(obj.cookTimeMinutes),
        servings: parseInt(obj.servings),
        caloriesPerServing: parseInt(obj.caloriesPerServing),
        difficulty: obj.difficulty,
        mealType: obj.mealType,
        tags: obj.tags,
        userId: parseInt(obj.userId)
    }
    console.log(newObj)

    const objStr = JSON.stringify(newObj).replace(/"([^"]+)":/g, '$1:');

    let requestQuery = {
        query: `
        mutation{
            createRecipe(recipeInput:${objStr} ){
              name
            }
          }
    `}
    return new Promise(function (resolve, reject) {
        try {
            fetch(baseUrl, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(requestQuery)

            })
                .then(res => {
                    if (res.ok) {
                        resolve({ "message": "Added Successfully" });
                    } else {
                        reject(new Error(`Failed to add recipe: ${res.statusText}`));
                    }
                })
                .catch(err => reject(err));
        } catch (err) {
            reject(err);
        }
    });
};



