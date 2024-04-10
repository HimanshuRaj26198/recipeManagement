import "./singleRecipe.scss";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllRecipes } from '../../Common/fetchData';
const SingleRecipe = () => {
    let params = useParams();
    let [recipeInfo, setRecipeInfo] = useState({});

    // save original 100% pixel width
    function rating(stars) {
        console.log(window)
        let cw = window.document.getElementById("rating1").clientWidth;
        window.rating1.style.width = Math.round(cw * (stars / 5)) + 'px';
    }

    useEffect(() => {
        fetchAllRecipes({ allInfo: true }, { _id: params.id })
            .then(data => {
                setRecipeInfo(data.data.recipes[0])
                rating(data.data.recipes[0].rating)
            })
            .catch(err => console.log(err));

    }, {})


    return <div className="root_section">
        <h1>{recipeInfo.name}</h1>
        <div className='singRecipe_component' >
            <div className='recipe_leftSection' >
                <div className="ratingBox" > <span>Rating</span>: <div id="rating1" className="rating"></div> </div>
                <div className='ingredints_section' >
                    <h3>Ingredients</h3>
                    <ul>
                        {recipeInfo.ingredients && recipeInfo.ingredients.map(a => {
                            return <li key={a} >{a}</li>
                        })}
                    </ul>
                </div>
                <div className='ingredints_section' >
                    <h3>Insutructions</h3>
                    <ul>
                        {recipeInfo.instructions && recipeInfo.instructions.map(a => {
                            return <li key={a} >{a}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='recipe_rightSection' >
                <img src={recipeInfo.image} />
            </div>
        </div>
    </div>
}


export default SingleRecipe;