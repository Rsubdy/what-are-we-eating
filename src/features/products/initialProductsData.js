import Product from './Product';

// Constructor for Product: (name, image = defaultImage, unit = "item", diet: {glutenfree: false, vegetarian: false, dairyfree: false}))

const initialProductsData = [];

initialProductsData.push(
    new Product('Milk', './milk.jpg', 'bottle', {glutenfree: true, vegetarian: true, dairyfree: false}),
    new Product('Eggs', './eggs.jpg', 'item', {glutenfree: true, vegetarian: true, dairyfree: true}),
    new Product('Flour', './flour.jpg', 'item', {glutenfree: false, vegetarian: true, dairyfree: true}),
    new Product('Ham', './ham.jpg', 'item', {glutenfree: true, vegetarian: false, dairyfree: true}),
    new Product('Bread', './bread.jpg', 'item', {glutenfree: false, vegetarian: true, dairyfree: true}),
    new Product('Butter', './butter.jpg', 'item', {glutenfree: true, vegetarian: true, dairyfree: false}),
    new Product('Milky way', './milkyway.jpg', 'bar', {glutenfree: true, vegetarian: true, dairyfree: false})
);

export default initialProductsData;