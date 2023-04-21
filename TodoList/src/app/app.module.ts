import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { InputComponent }   from './input/input.component';
import { TodoComponent }   from './todo/todo.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, InputComponent, TodoComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }