import { Component, Input, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodolistService } from '../../services/todolist/todolist.service';
import { todoitems } from '../../services/todolist/todolist.model';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
    selector: 'todo-selector',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss'],
    imports: [MatCardModule, CommonModule, ScrollingModule]
})


export class TodoComponent implements OnInit {

    @Input() filtertext: string = ""


    constructor(private todolistservice: TodolistService) { }

    items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    todos: todoitems[] = []
    filtertodos: todoitems[] = []
    activ: boolean = true
    alltsks: number = 0;
    comtasks: number = 0;

    ngOnInit() {
        this.todolistservice.gettodolist().subscribe((data: todoitems[]) => {
            //console.log(data)
            this.todos = data;
            this.filtertodos = data
            this.alltsks = this.todos.length;
            this.comtasks = this.todos.filter(todo => todo.completed).length;
        })

    }

    alltasksonclick() {
        debugger
        this.activ
        this.filtertodos = this.todos
    }

    completedonclick() {
        debugger
        console.log("test1")
        this.filtertodos = this.todos.filter(todo => todo.completed)
    }

    ngOnChanges() {
        this.filtertodos = this.todos.filter(todo => todo.todo.toLowerCase().includes(this.filtertext.toLowerCase()))
        console.log(this.filtertodos)
    }

    
}