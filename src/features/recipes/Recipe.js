import defaultImage from '../../img/default.jpg';

let idTracker = 1;
let incrementId = () => idTracker++;

export default class Recipe {
  
  constructor(name, image = `${defaultImage}`, ingredients, preparation){ 
      this.name = name;
      this.image = image;
      this.ingredients = ingredients;
      this.preparation = preparation;
      this.id = incrementId();
      
    }

}