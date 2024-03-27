import React from 'react'
import {Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import acknowledgement from '../img/Edamam_Badge_White.svg';

function About() {


  return (
    <div>
      <h2 >This is a portfolio React.js project by Robert Subdysiak</h2>
      <br />
      <h3>Overview</h3>
      <p>
      This app helps user get recipes for dishes that can be prepared from the products in user's fridge.
      <br />
      <br />
      Selected diet preferences will affect displayed products and recipes to avoid alergens and include other dietary restrictions, such as excluding animal products.
      <br />
      <br />
      User can select products from the list and add them to the fridge as well as create custom product.
      <br/>
      <br />
      With the full list of products in the fridge user can proceed to the recipes list. The app contains some original recipes to simulate internal database of recipes. This is the preferred way to select them, as all of the products in the recipe have to be present in user's fridge.
      <br />
      <br />
      The app also offers user an additional way to gather inspirations for the dishes. If the presented list of built-in recipes is not satysfying, user can fetch others from external database via Edamam Recipes API. The query will include user's dietary preferences (glutenfree, dairyfree, vegetarian or no restrictions) and list of products in the fridge. However, recipes can also include other products, so there is good chance that user will have to pay the visit to the grocery store. If interested, user can proceed to the detailed recipe via provided link to the website that displays it. The entire recipe cannot be presented in the app due to copyright reasons.
      <br />
      <br />
      To avoid losing information on reloads, the list of products in the fridge and list of recipes from API are stored in browser's local storage. At any moment user can clear all of the information with a press of a button.
      </p>
      <h3>Technology used</h3>

<ListGroup>
  <ListGroupItem>
  The app is entirely build in <strong>React.js</strong> and utilizes <strong>React Router</strong> for routing and <strong>Redux</strong> for state management.
  </ListGroupItem>
  <ListGroupItem>
  The external recipes come from <a href="https://www.edamam.com">Edamam Recipes API</a> set up with free "Developer plan" that enables up to 10 queries per minute.
  <Image src={acknowledgement} width={'30%'} height={'30%'} alt="acknowledgement Edamam API" />
  </ListGroupItem>
  <ListGroupItem>
  The styling is applied with the <strong>React-Bootstrap</strong> library.
  </ListGroupItem>
  <ListGroupItem>
  The logo and additional graphics were designed by prompting <strong>Chat GPT</strong>.
  </ListGroupItem>
  <ListGroupItem>
  The UI is an original idea.
  </ListGroupItem>
 </ListGroup>

    </div>
  )
}

export default About