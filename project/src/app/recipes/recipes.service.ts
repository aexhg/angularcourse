import { Recipe } from './recipes-list/recipe.model'
import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          "Cookie Dough",
          "Cookie Douugh", 
          "http://www.seriouseats.com/images/2015/08/20150823-grilled-chicken-cutlet-recipe-kenji-01.jpg", 
          [
            new Ingredient("cookies", 1),
            new Ingredient("dough", 2) 
          ]
        ),
        new Recipe(
          "Cookie Dough 2",
          "Cookie Douugh", 
          "http://www.seriouseats.com/images/2015/08/20150823-grilled-chicken-cutlet-recipe-kenji-01.jpg", 
          [
            new Ingredient("chocolatechips",10),
            new Ingredient("flour", 100)
          ]
        )
      ];

      recipeSelected = new EventEmitter<Recipe>();

      getRecipesList(){
          return this.recipes.slice();
      }

}