import { Component, Output, EventEmitter } from '@angular/core';
     
@Component({
    selector: 'create-new-todo',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent { 
    name:string = '';

    @Output() onChangeName = new EventEmitter<string>();

    addNewTodo() {
        if (this.name.length !== 0) {
            this.onChangeName.emit(this.name);
        }

        this.name = '';
    }
};