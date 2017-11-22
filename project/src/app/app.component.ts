import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipes.service'
import { ShoppinglistService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppinglistService]
})
export class AppComponent {
  showRecipe: boolean = true;

  onRecipeSelected(showRecipe: boolean){
    this.showRecipe = showRecipe;
  }

}
