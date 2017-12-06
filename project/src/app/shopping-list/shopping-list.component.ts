import { Component, OnInit, OnDestroy} from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [] = [];
  subscription: Subscription;
  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsUpdate.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
