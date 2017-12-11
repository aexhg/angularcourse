import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipes.service'
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppinglistService, HttpService]
})
export class AppComponent {
  
}
