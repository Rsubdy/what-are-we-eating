
let idTracker = 1;
let incrementId = () => idTracker++;

export default class Recipe {
  
  constructor(name, ingredients, preparation){ 
      this.name = name;
      this.ingredients = ingredients;
      this.preparation = preparation;
      this.id = incrementId();
      
    }

}