import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
  }

  onClickAdd(){
    this.slService.addIngredient(
      new Ingredient( this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value)
    );
  }
}
