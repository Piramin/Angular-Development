import { Component, Input } from '@angular/core';
     
@Component({
    selector: 'new-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent { 
    isDone:boolean = false;

    @Input() name:string = '';
};