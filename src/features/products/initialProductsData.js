import Product from './Product';

// Constructor for Product: (name, diet: {glutenfree: false, vegetarian: false, dairyfree: false})

let initialProductsData = [];

let data = [
    {name: 'Milk', diet: {glutenfree: true, vegetarian: true, dairyfree: false}},
    {name: 'Eggs', diet: {glutenfree: true, vegetarian: false, dairyfree: true}},
    {name: 'Wheat flour', diet: {glutenfree: false, vegetarian: true, dairyfree: true}},
    {name: 'Ham', diet: {glutenfree: true, vegetarian: false, dairyfree: true}},
    {name: 'Wheat bread', diet: {glutenfree: false, vegetarian: true, dairyfree: true}},
    {name: 'Butter', diet: {glutenfree: true, vegetarian: true, dairyfree: false}},
    {name: 'Garlic', diet: {glutenfree: true, vegetarian: true, dairyfree: true}},
    {name: 'Lentil', diet: {glutenfree: true, vegetarian: true, dairyfree: true}},
    {name: 'White rice', diet: {glutenfree: true, vegetarian: true, dairyfree: true}},
    {name: 'Tofu', diet: {glutenfree: true, vegetarian: true, dairyfree: true}}];

for (const product of data) {
    initialProductsData.push(JSON.stringify(new Product(product)));
}
export default initialProductsData = initialProductsData.map((e)=> JSON.parse(e));

