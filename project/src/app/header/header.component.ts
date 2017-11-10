import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output("recipeSelect")recipeSelectEmitter = new EventEmitter<boolean>();

    onRecipeSelect(recipeSelectValue: boolean){
        this.recipeSelectEmitter.emit(recipeSelectValue);
    }

}