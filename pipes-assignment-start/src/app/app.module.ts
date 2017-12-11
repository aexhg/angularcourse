import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SortPipe } from './sort.pipe';
import { ReversePipe } from './reverse.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    ReversePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
