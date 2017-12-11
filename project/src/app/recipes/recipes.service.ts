import { Recipe } from './recipes-list/recipe.model'
import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

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

      recipeSubject = new Subject<Recipe[]>();
      recipeSelected = new EventEmitter<Recipe>();

      saveRecipesList(recipes: Recipe[]){
        this.recipes = recipes.slice();
        this.recipeSubject.next(this.getRecipesList());
      }

      getRecipesList(){
          return this.recipes.slice();
      }

      getReceipById(index: number):Recipe{
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeSubject.next(this.getRecipesList());
      }

      updatedRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipeSubject.next(this.getRecipesList());
      }

      deleteRecipe(index: number){
       this.recipes.splice(index,1) ;
       this.recipeSubject.next(this.getRecipesList());
      }

}