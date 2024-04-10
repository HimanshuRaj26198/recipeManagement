import { useState, useEffect } from 'react';
import { addRecipe } from '../../Common/fetchData';
import('./form.scss')


const Form = () => {
    const [difficulty, setDifficulty] = useState('');
    const [instructionList, setInstructionList] = useState([<input type='text' id="instruction0" />]);
    const [ingredientsList, setIngredientsList] = useState([<input type='text' id="ingredient0" />]);
    const [mealTypeList, setMealtypeList] = useState([<input type='text' id="meal0" />]);
    const [tagsList, setTagsList] = useState([[<input type='text' id="tag0" />]])
    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = {
            name: document.getElementById('name').value,
            cuisine: document.getElementById('cuisine').value,
            prepTimeMinutes: document.getElementById('prepTime').value,
            cookTimeMinutes: document.getElementById('cookTime').value,
            servings: document.getElementById('servings').value,
            rating: document.getElementById('rating').value,
            caloriesPerServing: document.getElementById('calories').value,
            difficulty: document.getElementById('difficulty').value,
            image: document.getElementById('image').value,
            ingredients: Object.values(document.querySelectorAll('[id^="ingredient"]')).map(a => a.value),
            instructions: Object.values(document.querySelectorAll('[id^="instruction"]')).map(a => a.value),
            mealType: Object.values(document.querySelectorAll('[id^="mealType"]')).map(a => a.value),
            tags: Object.values(document.querySelectorAll('[id^="tag"]')).map(a => a.value),
            userId: 10
        }

        addRecipe(formData).then(res => console.log(res)).catch(err => { console.log(err) })
    }

    const addInputs = (name) => {
        let arr = [];
        let id = "";
        if (name === "instructions") {
            arr = [...instructionList];
            id = "instruction" + instructionList.length;
            arr.push(<input type="text" id={id} />)
            setInstructionList(arr)
        }
        if (name === "ingredients") {
            arr = [...ingredientsList]
            id = "ingredient" + ingredientsList.length;
            arr.push(<input type="text" id={id} />)
            setIngredientsList(arr)
        }
        if (name === "mealType") {
            arr = [...mealTypeList]
            id = "mealType" + mealTypeList.length;
            arr.push(<input type="text" id={id} />)
            setMealtypeList(arr)
        }
        if (name === "tags") {
            arr = [...tagsList]
            id = "mealType" + tagsList.length;
            arr.push(<input type="text" id={id} />)
            setTagsList(arr)
        }


        console.log(arr);

    }


    return <div className="formComponent" onSubmit={handleSubmit} >
        <form>
            <div className='form_center_top' >
                <div className='form_left' >
                    <div className='form_item'   >
                        <label>Name</label>
                        <input id='name' name='name' type='text' />
                    </div>
                    <div className='form_item'   >
                        <label>Preperation Time</label>
                        <input id='prepTime' type='number' />
                    </div>
                    <div className='form_item'   >
                        <label>Cooking Time</label>
                        <input id='cookTime' type='number' />
                    </div>
                    <div className='form_item'   >
                        <label>Calories</label>
                        <input id='calories' type='number' />
                    </div>

                    <div className='form_item'   >
                        <label>Rating</label>
                        <input id='rating' type='number' />
                    </div>

                </div>
                <div className='form_right' >
                    <div className='form_item'   >
                        <label>Cuisine</label>
                        <input id='cuisine' type='text' />
                    </div>
                    <div className='form_item'   >
                        <label>Image</label>
                        <input id='image' type='text' />
                    </div>
                    <div className='form_item'   >
                        <label>Servings</label>
                        <input id='servings' type='number' />
                    </div>
                    <div className='form_item'   >
                        <label>Difficulty</label>
                        <select id='difficulty' label="Difficulty" >
                            <option value="Easy" >Easy</option>
                            <option value="Hard" >Hard</option>
                            <option value="Medium" >Medium</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='form_center_bottom' >
                <div className='form_item'   >
                    <label>Instructions</label>
                    <ol>
                        {instructionList.map((a, i) => {
                            return <li>{a}</li>
                        })}
                    </ol>
                    <button type='button' className='form_input_action' onClick={() => addInputs("instructions")} > Add More Instructions </button>
                </div>
                <div className='form_item'   >
                    <label>Ingredients</label>
                    <ol>
                        {ingredientsList.map((a, i) => {
                            return <li>{a}</li>
                        })}
                    </ol>
                    <button className='form_input_action' onClick={() => addInputs("ingredients")} > Add More Ingredients </button>
                </div>
                <div className='form_item'   >
                    <label>Meal Types</label>
                    <ol>
                        {mealTypeList.map((a, i) => {
                            return <li>{a}</li>
                        })}
                    </ol>
                    <button className='form_input_action' onClick={() => addInputs("mealType")} > Add More Types </button>
                </div>
                <div className='form_item'   >
                    <label>Add Tags</label>
                    <ol>
                        {tagsList.map((a, i) => {
                            return <li>{a}</li>
                        })}
                    </ol>
                    <button className='form_input_action' onClick={() => addInputs("tags")} > Add More Tags </button>
                </div>
            </div>

            <button className='submit' type='submit' >Submit</button>
        </form>
    </div>
}

export default Form;