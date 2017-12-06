
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppinglistService {

    ingredientsUpdate = new Subject<Ingredient[]>();
    ingredients: Ingredient [] = [];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push( ingredient);
        this.ingredientsUpdate.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsUpdate.next(this.getIngredients());
    }
}