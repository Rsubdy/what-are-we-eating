# What are we eating? 
### _A **React.js** portfolio project by Robert Subdysiak_

## Overview

This app helps user get recipes for dishes that can be prepared from the products in user's fridge.

It prompts user to first select diet preferences. They will affect displayed products and recipes to exclude alergens and other dietary restrictions, such as avoiding meat.

Following that step user can select products from the list and add them to the fridge.

With the full list of products in the fridge user can proceed to the recipes list. The app contains some original recipes to simulate internal database of recipes. This is the preferred way to select them, as all of the products in the recipe have to be present in user's fridge.

To expand functionality app offers user an additional way to gather inspirations for dishes. If the presented list is not satysfying, user can fetch other recipes from external database via [Edamam Recipes API](https://www.edamam.com/). The query will include user's dietary preferences (glutenfree, dairyfree, vegetarian or no restrictions) and list of products in the fridge. However, recipes can also include other products, so there is good chance that user will have to pay the visit to the grocery store.

To avoid losing information on reloads, the list of products in the fridge and list of recipes from API are stored in browser's local storage. At any moment user can clear all of the information with a press of a button.

## Technology used and acknowledgements

* The app is entirely build in **React.js**, utilizes **React Router** for routing and **Redux** for state management.
* The styling is applied with **React-Bootstrap**.
* The logo was designed by prompting **Chat GPT**.
* Icons were gathered from opensource sites.
* External recipes come from [Edamam Recipes API](https://www.edamam.com/) set up with free "Developer plan" that enables **up to 10 queries per minute**.

