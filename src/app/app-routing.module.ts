import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },

  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'page1',component:Page1Component},
  { path: 'recipes',
    children: [
      { path:'',loadChildren: './recipes/recipes.module#RecipesPageModule' },
      { path:':recipeId',loadChildren: './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule' },
    ],
   },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
