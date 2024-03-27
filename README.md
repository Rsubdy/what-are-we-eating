# What are we eating? 
### _A **React.js** portfolio project by Robert Subdysiak_

## Overview

This app helps user get recipes for dishes that can be prepared from the products in user's fridge.

<img width="678" alt="Landing page" src="https://github.com/Rsubdy/what-are-we-eating/assets/84250712/215d1767-2d85-4541-98c2-e4f5fa33c795">

First it prompts user to select diet preferences. They will affect displayed products and recipes to exclude alergens and other dietary restrictions, e.g. for people avoiding meat. This version includes 3 main preferences: glutenfree, dairyfree, vegetarian.

<img width="687" alt="Setting diet preferences" src="https://github.com/Rsubdy/what-are-we-eating/assets/84250712/a813073b-0468-4b9e-bccd-26f4867ab266">

Following that step user can select products from the list and add them to the fridge. If user does not want to see some products on the list, they can be hidden until another reload.

<img width="687" alt="Adding products to the fridge" src="https://github.com/Rsubdy/what-are-we-eating/assets/84250712/34fe89b0-ba7c-4899-a114-bf9bdd747238">

The app has built-in list of products, but in this step user can also add custom products and assert whether they can be included in provided diet preferences (e.g. that the product is dairyfree). Product creator alerts user if the product is already on the list or the name is invalid (contains only blank spaces or a number).

<img width="auto" alt="Product creator" src="https://github.com/Rsubdy/what-are-we-eating/assets/84250712/f1da11c9-fc2c-428c-8899-48d3c948ca44">

After adding at least one product to the fridge user can proceed to the recipes list. The app contains some original recipes to simulate internal database of recipes. This is the preferred way to select them, as all of the products in the recipe have to be present in user's fridge. Displayed recipes also inform user of food restrictions even if they weren't excluded explicitly in the landing page.

<img width="782" alt="Presented recipes" src="https://github.com/Rsubdy/what-are-we-eating/assets/84250712/b11abe07-77c1-4408-8fe9-84785944278c">

The app also offers user an additional way to gather inspirations for the dishes. If the presented list of built-in recipes is not satysfying, user can fetch others from external database via [Edamam Recipes API](https://www.edamam.com/). The query will include user's dietary preferences (glutenfree, dairyfree, vegetarian or no restrictions) and list of products in the fridge. However, recipes can also include other products, so there is good chance that user will have to pay the visit to the grocery store. If interested, user can proceed to the detailed recipe via provided link to the website that displays it. The entire recipe cannot be presented in the app due to copyright reasons.

<img width="687" alt="Fetching external recipes" src="https://github.com/Rsubdy/what-are-we-eating/assets/84250712/d6b6ae3f-bdbe-4d56-8760-0ac3e6a29263">

To avoid losing information on reloads, the list of products in the fridge and list of recipes from API are stored in browser's local storage. At any given moment user can clear all preferences, product and recipes list with a press of the "Clear all" button.

## Technology used and acknowledgements

* The app is entirely build in **React.js**, utilizes **React Router** for routing and **Redux** for state management.
* The styling is applied with **React-Bootstrap**.
* The logo was designed by prompting **Chat GPT**.
* Icons were gathered from opensource sites.
* External recipes come from [Edamam Recipes API](https://www.edamam.com/) set up with free "Developer plan" that enables **up to 10 queries per minute**.

## Contact
Should you be interested in contacting me, please visit:

https://www.linkedin.com/in/robert-subdysiak-049086243/

or directly at: subdysiak -at- gmail.com or facebook.com/jak.gdyby/

