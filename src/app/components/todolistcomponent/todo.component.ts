import { Component, OnInit } from '@angular/core';
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
    constructor(private todolistservice: TodolistService) { }
    items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

    todos: todoitems[] = []
    filtertodos: todoitems[]=[]


    ngOnInit() {
        this.todolistservice.gettodolist().subscribe((data: todoitems[]) => {
            console.log(data)
            this.todos = data;
            this.filtertodos = data
        })
    }
}