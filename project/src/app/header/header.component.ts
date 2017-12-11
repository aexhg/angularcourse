import {Component} from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';
import { HttpService } from '../shared/http.service';
import { OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipes-list/recipe.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

    constructor(private recipeService: RecipeService, private httpService: HttpService){

    }

    ngOnInit(){

    }

    onSave(){
        this.httpService.saveRecipes().subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )
    }

    onFetch(){
        this.httpService.getRecipes();
    }

}