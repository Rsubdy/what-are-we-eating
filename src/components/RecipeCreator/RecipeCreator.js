import React from 'react'
import { selectFridgeProductByName } from '../../features/fridge/fridgeSlice'
import Recipe from '../../features/recipes/Recipe'
import {useSelector, useDispatch} from 'react-redux'


function RecipeCreator() {
    
    const dispatch = useDispatch();
    let newRecipe = JSON.stringify({name: 'asd', ingredients: [], preparation: "do something"});
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'addRecipe', payload: newRecipe});
        alert("recipe added!");
        e.target.reset()
    }
    
    return (
    <div>
        <h1>NOWY PRZEPIS!!!</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" required placeholder='Name of the recipe'></input>
            <button type="submit">Add recipe</button>
        </form>
    </div>
  )
}

export default RecipeCreator

/*

1. Okno nazwa przepisu.
2. Selektor wybierz produkty z listy.
3. Input dodaj wartość.
4. Selektor wskaz jednostke.
5. Wskaźnik ten przepis jest: bezglutenowy itd.
6. Input textarea - przepis.
7. Guzik wyczyść wszystko.
8. Guzik submit.


*/