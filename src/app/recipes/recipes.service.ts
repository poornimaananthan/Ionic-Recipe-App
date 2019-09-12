import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [{
    id:'r1',
    title:'Sambar',
    imageUrl:'assets/sambar.jpg',
    ingredients:['dhal','chilli','salt']
},
{
  id:'r2',
  title:'Chicken Gravy',
  imageUrl:'assets/chicken.jpg',
  ingredients:['chicken','Masala','Chilli powder','Pepper']
},
{
  id:'r3',
  title:'Sambar',
  imageUrl:'assets/sambar.jpg',
  ingredients:['dhal','chilli','salt']
},
{
id:'r4',
title:'Chicken Gravy',
imageUrl:'assets/chicken.jpg',
ingredients:['chicken','Masala','Chilli powder','Pepper']
}
,{
  id:'r5',
  title:'Sambar',
  imageUrl:'assets/sambar.jpg',
  ingredients:['dhal','chilli','salt']
},
{
id:'r6',
title:'Chicken Gravy',
imageUrl:'assets/chicken.jpg',
ingredients:['chicken','Masala','Chilli powder','Pepper']
}];
  

constructor() { }

getAllRecipes()
{
  return[...this.recipes];
}

getRecipe(recipeId:string)
{
  return {...this.recipes.find(recipe => {
    return recipe.id ===recipeId;
  })
};
}
}
