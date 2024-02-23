import Product from './Product';

// Constructor for Product: (name, image = defaultImage, unit = "item", diet: {glutenfree: false, vegetarian: false, dairyfree: false}))

let initialProductsData = [];

initialProductsData.push(JSON.stringify(new Product('Milk', '../../img/milk.jpg', 'litre', {glutenfree: true, vegetarian: true, dairyfree: false})));
initialProductsData.push(JSON.stringify(new Product('Eggs', '../img/eggs.jpg', 'item', {glutenfree: true, vegetarian: false, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Wheat flour', '../img/flour.jpg', 'gram', {glutenfree: false, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Ham', '../img/ham.jpg', 'gram', {glutenfree: true, vegetarian: false, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Wheat bread', '../img/bread.jpg', 'item', {glutenfree: false, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Butter', '../img/butter.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: false})));
initialProductsData.push(JSON.stringify(new Product('Garlic', '../img/garlic.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Lentil', '../img/lentil.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('White rice', '../img/whiteRice.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Tofu', '../img/tofu.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
export default initialProductsData = initialProductsData.map((e)=> JSON.parse(e));

