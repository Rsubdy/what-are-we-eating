import defaultImage from '../../img/default.jpg';

let idTracker = 1;
let incrementId = () => idTracker++;

export default class Product {
  
  constructor(name, image = defaultImage, unit = "item", diet = {glutenfree: false, vegetarian: false, dairyfree: false}, amount = 1){ 
      this.name = name;
      this.image = image;
      this.unit = unit;
      this.diet = diet;
      this.amount = amount;
      this.id = incrementId();
      
    }

}