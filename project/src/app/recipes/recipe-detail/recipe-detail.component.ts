import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { ShoppinglistService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe')recipe: Recipe
  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
  }
  onToShoppingList(){
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
