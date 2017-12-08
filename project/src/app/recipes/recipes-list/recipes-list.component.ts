import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './../recipes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  constructor( private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute) {}

  recipes: Recipe[] = [];
  subscription: Subscription;

  ngOnInit() {
    this.recipes = this.recipeService.getRecipesList();
    this.subscription = this.recipeService.recipeSubject.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    //this.recipeService.recipeSubject.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
