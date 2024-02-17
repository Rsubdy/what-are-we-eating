import Product from './Product';

// Constructor for Product: (name, image = defaultImage, unit = "item", diet: {glutenfree: false, vegetarian: false, dairyfree: false}))

let initialProductsData = [];

initialProductsData.push(JSON.stringify(new Product('Milk', './milk.jpg', 'litre', {glutenfree: true, vegetarian: true, dairyfree: false})));
initialProductsData.push(JSON.stringify(new Product('Eggs', './eggs.jpg', 'item', {glutenfree: true, vegetarian: false, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Wheat flour', './flour.jpg', 'gram', {glutenfree: false, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Ham', './ham.jpg', 'gram', {glutenfree: true, vegetarian: false, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Wheat bread', './bread.jpg', 'item', {glutenfree: false, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Butter', './butter.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: false})));
initialProductsData.push(JSON.stringify(new Product('Garlic', './garlic.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Lentil', './lentil.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('White rice', './whiteRice.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Tofu', './tofu.jpg', 'gram', {glutenfree: true, vegetarian: true, dairyfree: true})));
export default initialProductsData = initialProductsData.map((e)=> JSON.parse(e));

