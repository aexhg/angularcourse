import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipes-list/recipe.model';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { RecipeService } from '../recipes/recipes.service';

@Injectable()
export class HttpService {

  constructor(private http: Http, private recipeService: RecipeService) { }
  url = 'https://recipeproject-8c3d4.firebaseio.com/recipes.json';
  
  saveRecipes(){
    return this.http.put(this.url, this.recipeService.getRecipesList());
  }

  getRecipes(){
    this.http.get(this.url).map(
      (response) => {
        const recipes: Recipe[]= response.json();
        for(let recipe of recipes){
          if(!recipe.ingredients){
            recipe['ingredients']=[];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe []) => {
        this.recipeService.saveRecipesList(
          recipes
        );
      },
      (error) => console.log(error)
    )
  }
}
