import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Cookie Dough",
      "Cookie Douugh", 
      "http://www.seriouseats.com/images/2015/08/20150823-grilled-chicken-cutlet-recipe-kenji-01.jpg"
    ),
    new Recipe(
      "Cookie Dough 2",
      "Cookie Douugh", 
      "http://www.seriouseats.com/images/2015/08/20150823-grilled-chicken-cutlet-recipe-kenji-01.jpg"
    )
  ];

  @Output('recipeItemSelected') recipeItemSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe){
    this.recipeItemSelected.emit(recipe);
  }

}
