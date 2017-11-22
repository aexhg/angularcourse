import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppinglistService {

    ingredientsUpdate = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient [] = [];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push( ingredient);
        this.ingredientsUpdate.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsUpdate.emit(this.getIngredients());
    }
}