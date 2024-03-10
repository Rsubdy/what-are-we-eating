import Recipe from './Recipe';

// Constructor for Recipe: (name, ingredients, preparation)


let initialRecipesData = [];

initialRecipesData.push(JSON.stringify(new Recipe(
    'Pancakes',
    [
        {id: 1, amount: 0.5},
        {id: 2, amount: 2},
        {id: 3, amount: 200},
        {id: 6, amount: 15}],
    "Mix eggs, flour and milk. Fry on melted butter."
    )));
initialRecipesData.push(JSON.stringify(new Recipe(
    'Scrambled eggs',
    [
        {id: 2, amount: 2},
        {id: 6, amount: 15}],
    "Just fry the eggs on melted butter. Make sure not to break the yolks before the whites are set."
    )));
initialRecipesData.push(JSON.stringify(new Recipe(
    'Ham sandwich',
    [
        {id: 4, amount: 100},
        {id: 5, amount: 100},
        {id: 6, amount: 15}],
    "Do you really need a recipe for that?"
    )));
initialRecipesData.push(JSON.stringify(new Recipe(
    'English toast',
    [
        {id: 1, amount: 0.1},
        {id: 2, amount: 1},
        {id: 5, amount: 60},
        {id: 6, amount: 15}],
    "Mix the egg with milk and dip a loaf of bread in it. Fry on melted butter whilst singing \"God save the queen\""
    )));


export default initialRecipesData = initialRecipesData.map((e)=> JSON.parse(e));