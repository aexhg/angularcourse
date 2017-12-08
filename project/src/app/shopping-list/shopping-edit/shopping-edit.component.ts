import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @ViewChild('f') form: NgForm;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) =>{
        const ingredient = this.slService.getIngredients()[index];
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.slService.getIngredients()[index];
        this.form.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        })
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  reset(){
    this.form.reset();
    this.editMode = false;
  }

  onClickClear(){
    this.reset();
  }

  onClickDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.reset();
  }

  onSubmit(){
    const value = this.form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredients(ingredient, this.editItemIndex);
    }
    else{   
       this.slService.addIngredient(ingredient);
    }
    this.reset();
  }
}
