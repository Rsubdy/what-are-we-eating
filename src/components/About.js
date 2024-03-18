import React from 'react'
import {Row, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import acknowledgement from '../img/Edamam_Badge_White.svg';

function About() {
  return (
    <div>
      <h1 >This is a portfolio React.js project by Robert Subdysiak</h1>
      <h3>Overview</h3>
      <p>
      This app helps user get recipes for dishes that can be prepared from the products in user's fridge.
      It prompts user to first select diet preferences. They will affect displayed products and recipes to avoid alergens and other dietary restrictions, such as avoiding meat.
      Following that step user can select products from the list and add them to the fridge.
      With the full list of products in the fridge user can proceed to the recipes list. The app contains some original recipes to simulate internal database of recipes. This is the preferred way to select them, as all of the products in the recipe have to be present in user's fridge.
      To expand functionality app offers user an additional way to gather inspirations for dishes. If the presented list is not satysfying, user can fetch other recipes from external database via Edamam Recipes API. This query will include users dietary preferences and list of products in the fridge, however recipes can also include other products, so there is good chance that user will have to pay the visit to the grocery store.
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