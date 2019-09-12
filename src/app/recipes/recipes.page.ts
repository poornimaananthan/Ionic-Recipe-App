import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes:Recipe[];

  constructor(private recipeservice:RecipesService, private router:Router)
  { 
  }

  ngOnInit() {
      console.log("a",this.recipes);
  }
  ionViewDidEnter()
  {
    this.recipes = this.recipeservice.getAllRecipes();
  }

  navigateToDetails(id)
  {
    this.router.navigate(['/recipes/'+id]);
  }

}
