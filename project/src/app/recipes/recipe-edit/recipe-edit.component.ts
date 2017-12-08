import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from './../recipes-list/recipe.model';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  edit = false;
  index: number;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
     private recipeService: RecipeService,
     private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.edit = params['id'] != null;
      this.index = +params['id'];
      this.initRecipeForm();
    });
  }

  private initRecipeForm(){
    let recipeName = '';
    let recipeDesc = '';
    let recipeUrl = '';
    let recipeIngredients = new FormArray([]);
    
    if(this.edit){
      const recipe = this.recipeService.getReceipById(this.index);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeUrl = recipe.imagePath;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ing.name, [Validators.required]),
            'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      "name": new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(recipeUrl, [Validators.required]),
      'description': new  FormControl(recipeDesc, [Validators.required]),
      'ingredients':recipeIngredients,
    });
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required] ),
        'amount': new FormControl(null,  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      }
      )
    )
  }

  onSubmit(){
    // const recipe = new Recipe(
    //   this.recipeForm.value['name'], 
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    // )
    if(this.edit){
      this.recipeService.updatedRecipe(this.index, this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.recipeForm.reset();
    this.router.navigate(['../'], {'relativeTo':this.route});
  }
}
