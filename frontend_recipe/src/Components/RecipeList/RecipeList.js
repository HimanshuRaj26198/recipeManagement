import './RecipeList.scss'
import { useEffect, useState, useContext } from 'react';
import { fetchAllRecipes } from '../../Common/fetchData';
import Recipe from '../Recipe/Recipe';
import { FilterContext } from '../../Context/FilterContext';


const RecipeList = () => {

    let [recipeList, setRecipeList] = useState([]);
    const { data } = useContext(FilterContext);
    const [page, setPage] = useState(1);

    useEffect(() => {
        console.log(data, "DATA IN RECIPELIST FILTER")
        fetchAllRecipes({ name: true, image: true, caloriesPerServing: true, difficulty: true, rating: true, cuisine: true, _id: true }, data.state, { offset: page }).then(data => {
            console.log("Triggered Fetch", data.data.recipes)
            setRecipeList(data.data.recipes);
        }).catch(err => {
            console.log(err)
        });
        console.log("DATA", data)
    }, [data, page])

    return <div className='recipe_component' >
        <h2>Try out a new recipe today!</h2>
        <div className='recipe_list_container'>
            {recipeList && recipeList.map(item => {
                return <Recipe key={item.id} recipe={item} />
            })}
        </div>
        <div>
            <span className='pagination_icone' onClick={() => { if (page > 1) { setPage(page - 1) } }} ><i class="fa-solid fa-arrow-left"></i></span>  Page: {page} <span className='pagination_icone'><i onClick={() => { setPage(page + 1) }} class="fa-solid fa-arrow-right"></i></span>
        </div>
    </div>
}


export default RecipeList;