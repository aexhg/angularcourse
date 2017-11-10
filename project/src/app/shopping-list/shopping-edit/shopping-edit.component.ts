import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output('ingredientEvent') ingredientEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onClickAdd(){
    this.ingredientEvent.emit(
      new Ingredient( this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value)
    );
  }
}
