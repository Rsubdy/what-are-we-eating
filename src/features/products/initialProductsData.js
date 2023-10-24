import Product from './Product';

// Constructor for Product: (name, image = defaultImage, unit = "item", diet: {glutenfree: false, vegetarian: false, dairyfree: false}))

let initialProductsData = [];

initialProductsData.push(JSON.stringify(new Product('Milk', './milk.jpg', 'bottle', {glutenfree: true, vegetarian: true, dairyfree: false})));
initialProductsData.push(JSON.stringify(new Product('Eggs', './eggs.jpg', 'item', {glutenfree: true, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Flour', './flour.jpg', 'item', {glutenfree: false, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Ham', './ham.jpg', 'item', {glutenfree: true, vegetarian: false, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Bread', './bread.jpg', 'item', {glutenfree: false, vegetarian: true, dairyfree: true})));
initialProductsData.push(JSON.stringify(new Product('Butter', './butter.jpg', 'item', {glutenfree: true, vegetarian: true, dairyfree: false})));

export default initialProductsData = initialProductsData.map((e)=> JSON.parse(e));