
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppinglistService {

    ingredientsUpdate = new Subject<Ingredient[]>();
    ingredients: Ingredient [] = [];
    startedEditing = new Subject<number>();
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

    updateIngredients(ingredient: Ingredient, index: number){
        this.ingredients[index] = ingredient;
        this.ingredientsUpdate.next(this.getIngredients());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsUpdate.next(this.getIngredients());
    }
}