import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { ShoppinglistService } from './../../shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private slService: ShoppinglistService, private route: ActivatedRoute, private recipesService: RecipeService) { }
  index: number;
  recipe: Recipe;

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.index = +params['id'];
      this.recipe = this.recipesService.getReceipById(this.index);
    });
  }
  onToShoppingList(){
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
