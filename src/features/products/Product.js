import food from '../../img/food.png';

let idTracker = 1;
let incrementId = () => idTracker++;

export default class Product {
  
  constructor({name, diet}){ 
      this.name = name;
      this.diet = diet;
      this.id = incrementId();
    }

}