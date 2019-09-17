import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes:Recipe[];
  baseUrl = '';
  restItems: any =[];
  constructor(private apiService :ApiService,private recipeservice:RecipesService, private router:Router)
  { 
    // this.baseUrl='https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';
   
  }
  ngOnInit() {
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
