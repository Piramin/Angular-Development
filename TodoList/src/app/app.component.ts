import { Component } from '@angular/core';

class Todo {
    name: string;
    isDone: boolean;

    constructor({name, isDone}) {
        this.name = name;
        this.isDone = isDone;
    }
};

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    TODOS: Array<Todo> = [];

    createNewTodo(newTodoName:string):void {
        this.TODOS.unshift(new Todo({
            name: newTodoName,
            isDone: false
        }));
    }
};
